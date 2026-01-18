import { RESUME } from "../data";
import { useLanguage } from "./i18n/LanguageContext";


export function useResume() {
  const { lang } = useLanguage();
  return RESUME[lang];
}
