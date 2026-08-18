import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useI18n } from "@/i18n/I18nContext";

export function NotFound() {
  const { dict } = useI18n();
  useDocumentTitle(dict.notFound.kicker);

  return (
    <section className="empty-cart">
      <p className="section-kicker">{dict.notFound.kicker}</p>
      <h1>{dict.notFound.title}</h1>
      <p>{dict.notFound.body}</p>
      <Link className="button button--lime" to="/">
        {dict.notFound.cta} <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
