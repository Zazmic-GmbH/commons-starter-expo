import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import locale_en from "./assets/languages/en.json";

const i18n = new I18n(locale_en);

// Get the device's preferred language
let deviceLanguage = Localization.locale;

// Set the default language to the device's preferred language
if(deviceLanguage.includes("en")) {
  i18n.defaultLocale = "en";
} else {
  i18n.defaultLocale = deviceLanguage;
}

i18n.translations = {
  en: require("./assets/languages/en.json"),
  fr: require("./assets/languages/fr.json"),
  it: require("./assets/languages/it.json"),
  de: require("./assets/languages/de.json"),
  zh: require("./assets/languages/zh-cn.json"),
};

i18n.fallbacks = true;

export default i18n;
