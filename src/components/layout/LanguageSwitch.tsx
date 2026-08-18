import { useI18n } from "@/i18n/I18nContext";
import type { Locale } from "@/i18n/types";

const OPTIONS: { value: Locale; code: string; name: string }[] = [
  { value: "es", code: "ES", name: "Español" },
  { value: "en", code: "EN", name: "English" },
];

export function LanguageSwitch() {
  const { locale, setLocale, dict } = useI18n();

  return (
    <div
      className="language-switch"
      role="group"
      aria-label={dict.languageSwitch.label}
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={locale === option.value ? "is-active" : undefined}
          aria-pressed={locale === option.value}
          aria-label={option.name}
          title={option.name}
          onClick={() => setLocale(option.value)}
        >
          {option.code}
        </button>
      ))}
    </div>
  );
}
