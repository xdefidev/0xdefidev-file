const baseUrl = "https://xdefidev.xyz";

export const siteConfig = {
  name: "XDefiDev",
  url: baseUrl,
  tagline: "Web3, Blockchain & AI Development Studio",
  founded: 2018,

  contact: {
    email: "xdefidev@gmail.com",
    phone: "+1 (706) 228-9620",
    phoneE164: "+17062289620",
    telegram: "https://t.me/xdefidev0",
    whatsapp: "https://wa.me/+17062289620",
    discord: "https://discord.gg/nkNKHNyhk",
  },

  social: [
    { label: "Telegram", href: "https://t.me/xdefidev0" },
    { label: "Discord", href: "https://discord.gg/nkNKHNyhk" },
    { label: "WhatsApp", href: "https://wa.me/+17062289620" },
    { label: "Email", href: "mailto:xdefidev@gmail.com" },
  ],

  locales: [
    { code: "en", label: "English", ogLocale: "en_US" },
    { code: "zh", label: "中文", ogLocale: "zh_CN" },
    { code: "es", label: "Español", ogLocale: "es_ES" },
    { code: "hi", label: "हिन्दी", ogLocale: "hi_IN" },
    { code: "ar", label: "العربية", ogLocale: "ar_AE", rtl: true },
    { code: "pt", label: "Português", ogLocale: "pt_BR" },
    { code: "ru", label: "Русский", ogLocale: "ru_RU" },
    { code: "ja", label: "日本語", ogLocale: "ja_JP" },
    { code: "de", label: "Deutsch", ogLocale: "de_DE" },
    { code: "fr", label: "Français", ogLocale: "fr_FR" },
  ],

  defaultLocale: "en",

  pricing: {
    currency: "USD",
    min: "100",
    max: "50,000+",
  },

  // Generated at runtime by pages/api/og.jsx. The old default was a stock
  // YouTube thumbnail, which is a poor brand signal on social shares.
  ogImage: {
    url: `${baseUrl}/api/og`,
    width: 1200,
    height: 630,
    alt: "XDefiDev - Web3, Blockchain and AI Development Studio",
  },
};

export const localeCodes = siteConfig.locales.map((l) => l.code);
export const isRtl = (locale) =>
  siteConfig.locales.find((l) => l.code === locale)?.rtl ?? false;
export const ogLocale = (locale) =>
  siteConfig.locales.find((l) => l.code === locale)?.ogLocale ?? "en_US";

export default siteConfig;