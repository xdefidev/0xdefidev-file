import { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import Image from "next/image";
import { siteConfig } from "../site.config";

/**
 * Quick-contact sheet.
 *
 * Replaces the previous social-links modal. Channels are declared once in
 * site.config and every one opens a real conversation with a prefilled
 * message, rather than dropping the visitor on a bare profile page.
 */

const ContactContext = createContext(null);

const DEFAULT_MESSAGE =
  "Hi XDefiDev, I'd like to discuss a project. ";

const CHANNELS = [
  {
    id: "telegram",
    label: "Telegram",
    hint: "Fastest reply",
    icon: "/telegram-svgrepo-com (2).svg",
    build: (msg) => `https://t.me/share/url?url=${encodeURIComponent(siteConfig.url)}&text=${encodeURIComponent(msg)}`,
    accent: "hover:border-sky-300 hover:bg-sky-50",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    hint: "Call or message",
    icon: "/whatsapp-whats-app-svgrepo-com.svg",
    build: (msg) => `https://wa.me/${siteConfig.contact.phoneE164}?text=${encodeURIComponent(msg)}`,
    accent: "hover:border-emerald-300 hover:bg-emerald-50",
  },
  {
    id: "discord",
    label: "Discord",
    hint: "Community",
    icon: "/discord-icon-svgrepo-com.svg",
    build: () => siteConfig.contact.discord,
    accent: "hover:border-indigo-300 hover:bg-indigo-50",
  },
  {
    id: "email",
    label: "Email",
    hint: siteConfig.contact.email,
    icon: "/email-mail-web-svgrepo-com.svg",
    build: () =>
      `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(DEFAULT_MESSAGE)}`,
    accent: "hover:border-brand-300 hover:bg-brand-50",
    copyable: siteConfig.contact.email,
  },
];

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const copy = useCallback(async (value, id) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard blocked; the link is still reachable */
    }
  }, []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <ContactContext.Provider value={value}>
      {children}

      <Modal
        isOpen={isOpen}
        onOpenChange={(next) => setIsOpen(next)}
        placement="center"
        size="lg"
        backdrop="blur"
        hideCloseButton
      >
        <ModalContent className="rounded-2xl border border-surface-border bg-white shadow-card-hover">
          <ModalHeader className="flex flex-col gap-1 border-b border-surface-border px-6 py-5">
            <h2 className="text-xl font-semibold text-ink">Talk to us</h2>
            <p className="text-sm font-normal text-ink-subtle">
              Pick a channel and we&apos;ll pick up from there. We reply within one
              business day.
            </p>
          </ModalHeader>

          <ModalBody className="gap-3 px-6 py-5">
            {CHANNELS.map((channel) => (
              <div key={channel.id} className="flex items-center gap-2">
                <a
                  href={channel.build(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className={`group flex flex-1 items-center gap-4 rounded-xl border border-surface-border bg-surface px-4 py-3.5 transition-all duration-300 ease-smooth hover:shadow-card ${channel.accent}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-sunken">
                    <Image
                      src={channel.icon}
                      alt=""
                      width={24}
                      height={24}
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-ink">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm text-ink-subtle">
                      {channel.hint}
                    </span>
                  </span>
                  <svg
                    className="rtl-flip h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-slate-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>

                {channel.copyable && (
                  <button
                    type="button"
                    onClick={() => copy(channel.copyable, channel.id)}
                    aria-label={`Copy ${channel.copyable}`}
                    className="shrink-0 rounded-lg border border-surface-border bg-white p-3 text-ink-subtle transition-colors duration-300 hover:border-brand-300 hover:text-brand-600"
                  >
                    {copied === channel.id ? (
                      <svg className="h-4 w-4 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="9" y="9" width="12" height="12" rx="2" />
                        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                      </svg>
                    )}
                  </button>
                )}
              </div>
            ))}

            <p className="pt-2 text-center text-xs text-ink-subtle">
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-brand-600 underline-offset-2 hover:underline"
              >
                {siteConfig.contact.email}
              </a>{" "}
              &middot; {siteConfig.contact.phone}
            </p>
          </ModalBody>

          <ModalFooter className="border-t border-surface-border px-6 py-4">
            <Button variant="light" size="sm" onPress={close}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ContactContext.Provider>
  );
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used inside <ContactProvider>");
  return ctx;
}