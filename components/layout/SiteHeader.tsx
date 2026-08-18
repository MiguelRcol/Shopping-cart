"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatItemCount } from "@/lib/shop";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/shop", label: "Tienda" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { totalQuantity } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <div className="promo-bar">
        <span>Envío gratis desde $150 USD</span>
        <span className="promo-bar__desktop">Devoluciones durante 30 días</span>
        <Link href="/shop">Comprar novedades ↗</Link>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="STRIDE, ir al inicio">
          <span className="brand__mark" aria-hidden="true">
            S
          </span>
          <span>STRIDE</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "Cerrar" : "Menú"}</span>
          <span className="menu-toggle__lines" aria-hidden="true" />
          <span className="sr-only">
            {menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          className="cart-link"
          href="/cart"
          aria-current={pathname === "/cart" ? "page" : undefined}
          aria-label={`Carrito, ${formatItemCount(totalQuantity)}`}
        >
          Carrito
          <span className="cart-badge" aria-live="polite" aria-atomic="true">
            {totalQuantity}
          </span>
        </Link>
      </header>
    </>
  );
}

