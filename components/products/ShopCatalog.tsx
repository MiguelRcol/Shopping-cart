"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product, ProductCategory } from "@/lib/shop";

type Filter = "Todos" | ProductCategory;
type Sort = "featured" | "price-low" | "price-high";

export function ShopCatalog({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [sort, setSort] = useState<Sort>("featured");

  const visibleProducts = useMemo(() => {
    const filtered =
      filter === "Todos"
        ? products
        : products.filter((product) => product.category === filter);
    if (sort === "price-low") {
      return [...filtered].sort((a, b) => a.priceCents - b.priceCents);
    }
    if (sort === "price-high") {
      return [...filtered].sort((a, b) => b.priceCents - a.priceCents);
    }
    return filtered;
  }, [filter, products, sort]);

  return (
    <section className="catalog" aria-labelledby="catalog-title">
      <div className="catalog__toolbar">
        <div className="catalog__filters" aria-label="Filtrar productos">
          {(["Todos", "Calzado", "Accesorios"] as Filter[]).map((option) => (
            <button
              type="button"
              key={option}
              className={filter === option ? "is-active" : undefined}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <label className="catalog__sort">
          <span>Ordenar</span>
          <select value={sort} onChange={(event) => setSort(event.target.value as Sort)}>
            <option value="featured">Destacados</option>
            <option value="price-low">Precio: menor a mayor</option>
            <option value="price-high">Precio: mayor a menor</option>
          </select>
        </label>
      </div>
      <div className="catalog__count">
        <h2 id="catalog-title">Colección completa</h2>
        <p>{visibleProducts.length.toString().padStart(2, "0")} productos</p>
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

