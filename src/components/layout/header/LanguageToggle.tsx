import { useLanguage } from "../../../lib/i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="h-10 rounded-xl border px-3 text-sm bg-white/70 backdrop-blur shadow-sm
                 hover:bg-white transition dark:bg-black/40 dark:hover:bg-black/55"
      aria-label="Toggle language"
      type="button"
    >
      {lang === "tr" ? "TR" : "EN"}
    </button>
  );
}
