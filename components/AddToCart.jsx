import { useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "../lib/cart";
import { formatUSD } from "../lib/format";

/**
 * "Add to cart" control used on service and product pages.
 *
 * Free tools and quote-only items render nothing, so callers can mount it
 * unconditionally and let the component decide.
 */
export default function AddToCart({ item, className = "", label = "Add to cart" }) {
  const { add, has } = useCart();
  const router = useRouter();
  const [justAdded, setJustAdded] = useState(false);

  if (!item?.purchasable || !(item.price > 0)) return null;

  const inCart = has(item.slug);
  const name = item.name ?? item.slug;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) {
      router.push("/cart");
      return;
    }
    add(item.slug, item.kind ?? "service");
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2200);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      aria-label={
        inCart ? `${name} is in your cart, go to cart` : `Add ${name} to cart`
      }
      className={[
        "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold",
        "transition-all duration-300 ease-smooth",
        inCart
          ? "bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-200 hover:bg-accent-100"
          : "bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-card-hover active:scale-[0.98]",
        className,
      ].join(" ")}
    >
      {inCart ? (
        <>
          <CheckIcon />
          In cart &middot; {formatUSD(item.price)}
        </>
      ) : justAdded ? (
        <>
          <CheckIcon />
          Added
        </>
      ) : (
        <>
          <CartIcon />
          {label}
        </>
      )}
    </button>
  );
}

function CartIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl-flip"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h2.2l2.3 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H5.2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}