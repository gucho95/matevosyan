const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new NextI18Next({
  otherLanguages: ["ru", "hy", "en"],
  defaultLanguage: "en",
  defaultNS: "common",
  localeSubpaths: {
    ru: "ru",
    hy: "hy",
    en: "en",
  },
  localePath: path.resolve("./public/locales"),
  serverLanguageDetection: false,
});
