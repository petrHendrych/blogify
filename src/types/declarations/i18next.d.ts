import translations from "@/locales/en/translations.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translations";
    resources: {
      translations: typeof translations;
    };
  }
}
