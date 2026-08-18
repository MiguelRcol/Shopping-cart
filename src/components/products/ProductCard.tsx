import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { QuantityControl } from "@/components/ui/QuantityControl";
import { useI18n } from "@/i18n/I18nContext";
import { formatCurrency, type Product } from "@/lib/shop";

export function ProductCard({ product }: { product: Product }) {
  const { dict, locale } = useI18n();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  const ratingLabel = product.rating?.toFixed(1);

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        {product.isNew && <span className="product-label">{dict.product.newBadge}</span>}
        <img
          className="product-card__image"
          src={product.image}
          alt={dict.product.alt(product.title, product.category)}
          width="640"
          height="720"
          loading="lazy"
          decoding="async"
        />
        <span className="product-card__index" aria-hidden="true">
          /{product.id.replace(/\D/g, "").slice(-2).padStart(2, "0") || "01"}
        </span>
      </div>
      <div className="product-card__info">
        <p className="product-card__eyebrow">
          {product.collectionLine} / {dict.audiences[product.audience]}
        </p>
        <div className="product-card__heading">
          <h2>{product.title}</h2>
          <p>{formatCurrency(product.priceCents, locale)} USD</p>
        </div>
        {ratingLabel && (
          <p className="product-rating" aria-label={dict.product.ratingAria(ratingLabel)}>
            ★ {ratingLabel}
          </p>
        )}
        <div className="product-card__actions">
          <QuantityControl
            id={`product-${product.id}`}
            name={product.title}
            value={quantity}
            onChange={setQuantity}
            compact
          />
          <button className="button button--dark product-add" type="button" onClick={handleAdd}>
            {added ? dict.product.added : dict.product.add}
          </button>
        </div>
      </div>
    </article>
  );
}
