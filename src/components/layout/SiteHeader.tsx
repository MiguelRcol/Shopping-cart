import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/components/cart/CartProvider";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { useI18n } from "@/i18n/I18nContext";

export function SiteHeader() {
  const { pathname } = useLocation();
  const { totalQuantity } = useCart();
  const { dict } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: dict.header.navHome },
    { to: "/shop", label: dict.header.navShop },
  ];

  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        {dict.common.skipToContent}
      </a>
      <div className="promo-bar">
        <span>{dict.header.promoShipping}</span>
        <span className="promo-bar__desktop">{dict.header.promoReturns}</span>
        <Link to="/shop">{dict.header.promoCta}</Link>
        <LanguageSwitch />
      </div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label={dict.header.brandAria}>
          <span className="brand__mark" aria-hidden="true">
            S
          </span>
          <span>{dict.common.brandName}</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">
            {menuOpen ? dict.header.menuCloseLabel : dict.header.menuOpenLabel}
          </span>
          <span className="menu-toggle__lines" aria-hidden="true" />
          <span className="sr-only">
            {menuOpen ? dict.header.menuCloseAria : dict.header.menuOpenAria}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`}
          aria-label={dict.header.navAria}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={pathname === link.to ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          className="cart-link"
          to="/cart"
          aria-current={pathname === "/cart" ? "page" : undefined}
          aria-label={dict.header.cartAria(dict.common.itemCount(totalQuantity))}
        >
          {dict.header.cartLabel}
          <span className="cart-badge" aria-live="polite" aria-atomic="true">
            {totalQuantity}
          </span>
        </Link>
      </header>
    </>
  );
}
