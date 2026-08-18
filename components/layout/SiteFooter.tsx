import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <p>Muévete con intención.</p>
        <Link href="/shop">Ver colección ↗</Link>
      </div>
      <div className="site-footer__bottom">
        <Link className="brand brand--footer" href="/">
          <span className="brand__mark" aria-hidden="true">
            S
          </span>
          <span>STRIDE</span>
        </Link>
        <p>Proyecto educativo de comercio electrónico.</p>
        <p>© 2026 STRIDE / Bogotá</p>
      </div>
    </footer>
  );
}

