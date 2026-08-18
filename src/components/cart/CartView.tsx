import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/components/cart/CartProvider";
import { QuantityControl } from "@/components/ui/QuantityControl";
import { useI18n } from "@/i18n/I18nContext";
import { formatCurrency } from "@/lib/shop";

const FREE_SHIPPING_THRESHOLD = 15000;
const SHIPPING_COST = 900;

export function CartView() {
  const { dict, locale } = useI18n();
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
        <span>{dict.cart.loading}</span>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="empty-cart">
        <p className="section-kicker">{dict.cart.kicker(0)}</p>
        <h1>{dict.cart.emptyTitle}</h1>
        <p>{dict.cart.emptyBody}</p>
        <Link className="button button--lime" to="/shop">
          {dict.cart.exploreCta} <span aria-hidden="true">↗</span>
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
          <p className="section-kicker">{dict.cart.kicker(lines.length)}</p>
          <h1>{dict.cart.title}</h1>
        </div>
        <p>{dict.common.itemCount(totalQuantity)}</p>
      </section>

      <div className="cart-layout">
        <section className="cart-lines" aria-labelledby="cart-items-title">
          <div className="cart-lines__header">
            <h2 id="cart-items-title">{dict.cart.itemsHeading}</h2>
            <button type="button" onClick={clearCart}>
              {dict.cart.clear}
            </button>
          </div>
          {lines.map((line) => (
            <article className="cart-line" key={line.product.id}>
              <div className="cart-line__image-wrap">
                <img
                  src={line.product.image}
                  alt={dict.product.alt(line.product.title, line.product.category)}
                  width="300"
                  height="340"
                  decoding="async"
                />
              </div>
              <div className="cart-line__details">
                <p className="product-card__eyebrow">
                  {line.product.collectionLine} / {dict.audiences[line.product.audience]}
                </p>
                <h3>{line.product.title}</h3>
                <p>
                  {formatCurrency(line.product.priceCents, locale)} USD{" "}
                  {dict.cart.perUnit}
                </p>
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
                    {dict.cart.remove}
                  </button>
                </div>
              </div>
              <p className="cart-line__total">
                {formatCurrency(line.product.priceCents * line.quantity, locale)} USD
              </p>
            </article>
          ))}
        </section>

        <aside className="order-summary" aria-labelledby="summary-title">
          <p className="section-kicker">{dict.cart.summaryKicker}</p>
          <h2 id="summary-title">{dict.cart.summaryTitle}</h2>
          <dl>
            <div>
              <dt>{dict.cart.subtotal}</dt>
              <dd>{formatCurrency(subtotalCents, locale)} USD</dd>
            </div>
            <div>
              <dt>{dict.cart.shipping}</dt>
              <dd>
                {shippingCents === 0
                  ? dict.cart.free
                  : `${formatCurrency(shippingCents, locale)} USD`}
              </dd>
            </div>
            <div className="order-summary__total">
              <dt>{dict.cart.total}</dt>
              <dd>{formatCurrency(subtotalCents + shippingCents, locale)} USD</dd>
            </div>
          </dl>

          {remainingForFreeShipping > 0 ? (
            <div className="shipping-progress">
              <div
                className="shipping-progress__track"
                role="progressbar"
                aria-label={dict.cart.progressAria}
                aria-valuemin={0}
                aria-valuemax={FREE_SHIPPING_THRESHOLD}
                aria-valuenow={subtotalCents}
              >
                <span
                  style={{
                    width: `${Math.min(100, (subtotalCents / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                  }}
                />
              </div>
              <p>{dict.cart.remaining(formatCurrency(remainingForFreeShipping, locale))}</p>
            </div>
          ) : (
            <p className="shipping-earned">{dict.cart.earned}</p>
          )}

          <button
            className="button button--lime button--full"
            type="button"
            onClick={() => setDemoNotice(true)}
          >
            {dict.cart.checkout} <span aria-hidden="true">↗</span>
          </button>
          <p className="demo-caption">{dict.cart.demoCaption}</p>
          {demoNotice && (
            <p className="demo-notice" role="status">
              {dict.cart.demoNotice}
            </p>
          )}
        </aside>
      </div>
    </>
  );
}
