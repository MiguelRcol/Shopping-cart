"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { QuantityControl } from "@/components/ui/QuantityControl";
import { formatCurrency, type Product } from "@/lib/shop";

export function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        {product.isNew && <span className="product-label">Nuevo</span>}
        <img
          className="product-card__image"
          src={product.image}
          alt={product.alt}
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
        <p className="product-card__eyebrow">{product.collection}</p>
        <div className="product-card__heading">
          <h2>{product.title}</h2>
          <p>{formatCurrency(product.priceCents)} USD</p>
        </div>
        {product.rating && (
          <p className="product-rating" aria-label={`${product.rating} de 5 estrellas`}>
            ★ {product.rating.toFixed(1)}
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
            {added ? "Añadido ✓" : "Añadir al carrito"}
          </button>
        </div>
      </div>
    </article>
  );
}

