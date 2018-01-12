import { I18n } from "maji";
import Settings from "./settings";

I18n.translations = {
  nl: require("./locales/nl.yml").nl
};

I18n.autoDetectLocale({ defaultLocale: Settings.defaultLocale });
export default I18n;
