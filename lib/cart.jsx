import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/**
 * Cart state, persisted to localStorage.
 *
 * Only slugs and kinds are stored, never prices — the checkout API resolves
 * every price server-side from the catalogue, so a hand-edited cart cannot
 * change what is charged.
 */

const STORAGE_KEY = "xdefidev.cart.v1";

const CartContext = createContext(null);

const read = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(read());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable (private mode); cart stays in memory */
    }
  }, [items, ready]);

  const add = useCallback((slug, kind = "service") => {
    setItems((prev) =>
      prev.some((i) => i.slug === slug)
        ? prev
        : [...prev, { slug, kind, addedAt: Date.now() }],
    );
  }, []);

  const remove = useCallback((slug) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const has = useCallback(
    (slug) => items.some((i) => i.slug === slug),
    [items],
  );

  const count = items.length;

  const value = useMemo(
    () => ({ items, add, remove, clear, has, count, ready }),
    [items, add, remove, clear, has, count, ready],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}