module.exports = {
  optimizeFonts: true,
  images: {
    domains: ["ik.imagekit.io"],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: [
      "en", // English
      "zh", // Chinese (Simplified)
      "es", // Spanish
      "hi", // Hindi
      "ar", // Arabic
      "pt", // Portuguese
      "ru", // Russian
      "ja", // Japanese
      "de", // German
      "fr"  // French
    ],
    defaultLocale: "en",
    localeDetection: false
  }
};
