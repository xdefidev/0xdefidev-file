import { useEffect, useState } from "react";
import { siteConfig } from "../site.config";

/**
 * Dismissible site-wide announcement.
 *
 * Sits above the navbar and tells visitors the Telegram handle moved and
 * that Discord is now the main place to reach us.
 *
 * Hydration: the bar renders on the server and on the client's first paint,
 * then an effect reads the dismissal flag and hides it. That keeps the
 * markup identical on both sides — reading localStorage during render would
 * mismatch and warn.
 */
const STORAGE_KEY = "xdefidev-notice:discord-move";

export default function NoticeBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "dismissed") {
        setVisible(false);
      }
    } catch {
      // Private browsing can block storage; leave the notice up.
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "dismissed");
    } catch {
      // Already hidden for this page view even if we cannot persist.
    }
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Service announcement"
      className="relative z-50 w-full bg-ink text-white"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-2 px-11 py-2.5 sm:px-14 lg:px-16">
        <p className="text-center text-[13px] leading-snug sm:text-sm">
          Our Telegram handle has changed to{" "}
          <span className="font-semibold">@xdefidev0</span> — we are now
          available on Discord.
          <a
            href={siteConfig.contact.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 font-semibold text-brand-300 underline underline-offset-2 transition-colors hover:text-brand-200 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Join our Discord
          </a>
        </p>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute end-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
