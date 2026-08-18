import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nContext";

export function SiteFooter() {
  const { dict } = useI18n();

  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <p>{dict.footer.lead}</p>
        <Link to="/shop">{dict.footer.viewCollection}</Link>
      </div>
      <div className="site-footer__bottom">
        <Link className="brand brand--footer" to="/">
          <span className="brand__mark" aria-hidden="true">
            S
          </span>
          <span>{dict.common.brandName}</span>
        </Link>
        <p>{dict.footer.tagline}</p>
        <p>{dict.footer.copyright}</p>
      </div>
    </footer>
  );
}
