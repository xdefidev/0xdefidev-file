"use client";

import {
  Navbar as NavbarRoot,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Image from "next/image";
import { NAV_CATEGORIES, MOBILE_LINKS, DESKTOP_LINKS } from "../lib/nav";
import { siteConfig } from "../site.config";
import { useCart } from "../lib/cart";
import { useContact } from "./Contact";

const BadgeIcon = {
  blockchain: "M12 2 4 6v6c0 5 3.4 9.3 8 10 4.6-.7 8-5 8-10V6z",
  defi: "M4 18h16M7 18V9m5 9V5m5 13v-6",
  exchange: "M4 8h13l-3-3m3 11H7l3 3",
  casino: "M4 6h16v12H4zM9 10h.01M15 14h.01",
  telegram: "M21 5 3 11l5 2 2 6 3-4 5 4z",
  software: "M9 18V5l12-2v13M9 13l12-2",
  ai: "M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8 2 2M18 6l-2 2M8 16l-2 2",
  automation: "M5 12a7 7 0 0 1 12-5m2 5a7 7 0 0 1-12 5",
  cloud: "M7 18a4 4 0 0 1 0-8 6 6 0 0 1 11.5 2A3.5 3.5 0 0 1 17 18z",
  apis: "M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1",
  trading:
    "M3 17l5-5 4 3 7-8M14 7h7v7",
};

const ACCENTS = {
  blockchain: "bg-brand-50 text-brand-600",
  defi: "bg-teal-50 text-teal-600",
  exchange: "bg-accent-50 text-accent-600",
  casino: "bg-orange-50 text-orange-600",
  telegram: "bg-sky-50 text-sky-600",
  software: "bg-indigo-50 text-indigo-600",
  ai: "bg-cyan-50 text-cyan-600",
  automation: "bg-violet-50 text-violet-600",
  cloud: "bg-slate-100 text-slate-600",
  apis: "bg-emerald-50 text-emerald-600",
  trading: "bg-amber-50 text-amber-600",
};

function NavIcon({ badge }) {
  const d = BadgeIcon[badge] ?? BadgeIcon.software;
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export function AcmeLogo() {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-flex">
      <Image
        src="/logo.png"
        width={132}
        height={44}
        alt={`${siteConfig.name} logo`}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}

export default function AppNavbar() {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const { open: openContact } = useContact();
  const { count, ready } = useCart();
  const [expanded, setExpanded] = useState(false);

  // HeroUI's collapsible menu needs to know the viewport, which it cannot
  // measure during SSR.
  useEffect(() => setExpanded(window.innerWidth >= 640), []);

  useEffect(() => {
    const onResize = () => setExpanded(window.innerWidth >= 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLanguageChange = async (lang) => {
    await i18n.changeLanguage(lang);
    router.push(router.asPath, router.asPath, { locale: lang });
  };

  const closeMenu = () => setExpanded(false);

  return (
    <NavbarRoot
      className="sticky top-0 z-40 w-full max-w-none border-b border-surface-border bg-white/85 backdrop-blur-lg"
      maxWidth="full"
      position="sticky"
      isExpanded={expanded}
    >
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>

      <NavbarContent className="hidden gap-1 sm:flex" justify="center">
        {DESKTOP_LINKS.map((link) =>
          link.href === "/categories" ? (
            <NavbarItem key={link.href}>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    variant="light"
                    radius="sm"
                    className="h-9 px-3 text-[0.95rem] font-medium text-ink transition-colors data-[hover=true]:bg-surface-sunken data-[hover=true]:text-brand-600"
                    endContent={<ChevronDown />}
                  >
                    {t("categories")}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Service categories"
                  className="w-[min(38rem,90vw)] rounded-2xl border border-surface-border bg-white p-2 shadow-card-hover"
                  itemClasses={{
                    base: "gap-3 rounded-xl p-3 transition-colors duration-200 data-[hover=true]:bg-surface-sunken",
                  }}
                >
                  {NAV_CATEGORIES.map((cat) => (
                    <DropdownItem
                      key={cat.href}
                      href={cat.href}
                      className="group"
                      startContent={
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${ACCENTS[cat.badge] ?? ACCENTS.software}`}
                        >
                          <NavIcon badge={cat.badge} />
                        </span>
                      }
                    >
                      <span className="block font-semibold text-ink">
                        {cat.label}
                      </span>
                      {cat.description && (
                        <span className="mt-0.5 block text-xs leading-relaxed text-ink-subtle">
                          {cat.description}
                        </span>
                      )}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          ) : (
            <NavbarItem key={link.href}>
              <NavLink href={link.href} onClick={closeMenu}>
                {t(link.key)}
              </NavLink>
            </NavbarItem>
          ),
        )}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="bordered"
                size="sm"
                className="h-9 border-surface-border px-3 text-sm font-medium text-ink"
              >
                {siteConfig.locales.find((l) => l.code === i18n.language)?.label ??
                  "English"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Language" className="rounded-xl border border-surface-border p-1.5 shadow-card">
              {siteConfig.locales.map((lang) => (
                <DropdownItem
                  key={lang.code}
                  onPress={() => handleLanguageChange(lang.code)}
                  className="rounded-lg text-sm font-medium"
                >
                  {lang.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            href="/cart"
            isIconOnly
            aria-label={`Cart, ${ready ? count : 0} item${count === 1 ? "" : "s"}`}
            variant="light"
            className="relative h-9 w-9 min-w-9 rounded-lg text-ink-subtle"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M2 3h2.2l2.3 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H5.2" />
            </svg>
            {ready && count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-600 px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">
          <Button
            size="sm"
            className="h-9 rounded-lg bg-brand-600 px-4 font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            onPress={openContact}
          >
            {t("getInTouch")}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle className="text-ink" />
      </NavbarContent>

      <NavbarMenu className="border-b border-surface-border bg-white pb-6">
        {MOBILE_LINKS.map((link) => (
          <NavbarMenuItem key={link.href ?? link.label}>
            <Link
              href={link.href ?? "/"}
              className="block w-full rounded-lg px-3 py-2.5 font-medium text-ink transition-colors hover:bg-surface-sunken"
            >
              {link.label}
            </Link>

            {link.children && (
              <div className="mt-1 space-y-0.5 ps-3">
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-lg px-3 py-2 text-sm text-ink-subtle transition-colors hover:bg-surface-sunken hover:text-ink"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem className="pt-4">
          <Button
            fullWidth
            className="rounded-lg bg-brand-600 font-semibold text-white"
            onPress={openContact}
          >
            {t("getInTouch")}
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NavbarRoot>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:bg-surface-sunken hover:text-brand-600"
    >
      {children}
    </Link>
  );
}

function ChevronDown() {
  return (
    <svg
      className="h-3.5 w-3.5 opacity-60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}