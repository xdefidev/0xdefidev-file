import { categories } from "../data/categories";
import { siteConfig } from "../site.config";

/**
 * Single source of truth for navigation.
 *
 * Previously the desktop dropdown and the mobile menu each held their own
 * hardcoded copy, so adding a link meant editing two arrays that could drift.
 */

export const NAV_CATEGORIES = categories.map((c) => ({
  label: c.label,
  href: `/categories/${c.slug}`,
  description: c.navDescription ?? "",
  badge: c.badge,
}));

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

/**
 * Desktop bar only. `key` is the i18n lookup; `href` of "/categories" is a
 * sentinel that renders the dropdown rather than a link.
 */
export const DESKTOP_LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "categories", label: "Categories", href: "/categories" },
  { key: "services", label: "Services", href: "/services" },
  { key: "products", label: "Products", href: "/products" },
  { key: "portfolio", label: "Portfolio", href: "/portfolio" },
  { key: "blog", label: "Blog", href: "/blog" },
];

export const MOBILE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Categories", children: NAV_CATEGORIES },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export { siteConfig };