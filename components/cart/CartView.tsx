"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { QuantityControl } from "@/components/ui/QuantityControl";
import { formatCurrency, formatItemCount } from "@/lib/shop";

const FREE_SHIPPING_THRESHOLD = 15000;
const SHIPPING_COST = 900;

export function CartView() {
  const {
    lines,
    totalQuantity,
    subtotalCents,
    hydrated,
    setQuantity,
    removeItem,
    clearCart,
  } = useCart();
  const [demoNotice, setDemoNotice] = useState(false);

  if (!hydrated) {
    return (
      <div className="cart-loading" role="status">
        <span className="cart-loading__bar" />
        <span>Cargando tu equipo…</span>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="empty-cart">
        <p className="section-kicker">Carrito / 00</p>
        <h1>Tu carrito aún no arrancó.</h1>
        <p>
          Encuentra el equipo que acompaña tu ritmo y vuelve cuando estés listo.
        </p>
        <Link className="button button--lime" href="/shop">
          Explorar la tienda <span aria-hidden="true">↗</span>
        </Link>
      </section>
    );
  }

  const shippingCents =
    subtotalCents >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const remainingForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotalCents,
  );

  return (
    <>
      <section className="cart-hero">
        <div>
          <p className="section-kicker">Carrito / {lines.length.toString().padStart(2, "0")}</p>
          <h1>Tu equipo.</h1>
        </div>
        <p>{formatItemCount(totalQuantity)}</p>
      </section>

      <div className="cart-layout">
        <section className="cart-lines" aria-labelledby="cart-items-title">
          <div className="cart-lines__header">
            <h2 id="cart-items-title">Artículos</h2>
            <button type="button" onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
          {lines.map((line) => (
            <article className="cart-line" key={line.product.id}>
              <div className="cart-line__image-wrap">
                <img
                  src={line.product.image}
                  alt={line.product.alt}
                  width="300"
                  height="340"
                  decoding="async"
                />
              </div>
              <div className="cart-line__details">
                <p className="product-card__eyebrow">{line.product.collection}</p>
                <h3>{line.product.title}</h3>
                <p>{formatCurrency(line.product.priceCents)} USD / unidad</p>
                <div className="cart-line__controls">
                  <QuantityControl
                    id={`cart-${line.product.id}`}
                    name={line.product.title}
                    value={line.quantity}
                    onChange={(quantity) =>
                      setQuantity(line.product.id, quantity)
                    }
                    removeAtZero
                  />
                  <button
                    className="text-button"
                    type="button"
                    onClick={() => removeItem(line.product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <p className="cart-line__total">
                {formatCurrency(line.product.priceCents * line.quantity)} USD
              </p>
            </article>
          ))}
        </section>

        <aside className="order-summary" aria-labelledby="summary-title">
          <p className="section-kicker">Resumen</p>
          <h2 id="summary-title">Total del pedido</h2>
          <dl>
            <div>
              <dt>Subtotal</dt>
              <dd>{formatCurrency(subtotalCents)} USD</dd>
            </div>
            <div>
              <dt>Envío</dt>
              <dd>{shippingCents === 0 ? "Gratis" : `${formatCurrency(shippingCents)} USD`}</dd>
            </div>
            <div className="order-summary__total">
              <dt>Total</dt>
              <dd>{formatCurrency(subtotalCents + shippingCents)} USD</dd>
            </div>
          </dl>

          {remainingForFreeShipping > 0 ? (
            <div className="shipping-progress">
              <div
                className="shipping-progress__track"
                role="progressbar"
                aria-label="Progreso para obtener envío gratis"
                aria-valuemin={0}
                aria-valuemax={FREE_SHIPPING_THRESHOLD}
                aria-valuenow={subtotalCents}
              >
                <span style={{ width: `${Math.min(100, (subtotalCents / FREE_SHIPPING_THRESHOLD) * 100)}%` }} />
              </div>
              <p>
                Te faltan {formatCurrency(remainingForFreeShipping)} USD para envío gratis.
              </p>
            </div>
          ) : (
            <p className="shipping-earned">✓ Tu pedido tiene envío gratis.</p>
          )}

          <button
            className="button button--lime button--full"
            type="button"
            onClick={() => setDemoNotice(true)}
          >
            Finalizar pedido <span aria-hidden="true">↗</span>
          </button>
          <p className="demo-caption">
            Demo educativa: no se solicitarán datos ni se procesará ningún pago.
          </p>
          {demoNotice && (
            <p className="demo-notice" role="status">
              ¡Buen entrenamiento! El checkout termina aquí en esta demo.
            </p>
          )}
        </aside>
      </div>
    </>
  );
}

