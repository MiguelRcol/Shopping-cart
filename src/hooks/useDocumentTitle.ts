import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nContext";

export function useDocumentTitle(pageTitle: string) {
  const { dict } = useI18n();

  useEffect(() => {
    document.title = dict.common.titleTemplate(pageTitle);
  }, [dict, pageTitle]);
}
