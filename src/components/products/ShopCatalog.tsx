import { useMemo, useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { useI18n } from "@/i18n/I18nContext";
import type { Product, ProductCategory } from "@/lib/shop";

type Filter = "all" | ProductCategory;
type Sort = "featured" | "price-low" | "price-high";

export function ShopCatalog({ products }: { products: Product[] }) {
  const { dict } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("featured");

  const filterOptions: { value: Filter; label: string }[] = [
    { value: "all", label: dict.catalog.filterAll },
    { value: "shoes", label: dict.catalog.filterShoes },
    { value: "accessories", label: dict.catalog.filterAccessories },
  ];

  const visibleProducts = useMemo(() => {
    const filtered =
      filter === "all"
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
        <div className="catalog__filters" aria-label={dict.catalog.filtersAria}>
          {filterOptions.map((option) => (
            <button
              type="button"
              key={option.value}
              className={filter === option.value ? "is-active" : undefined}
              aria-pressed={filter === option.value}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <label className="catalog__sort">
          <span>{dict.catalog.sortLabel}</span>
          <select value={sort} onChange={(event) => setSort(event.target.value as Sort)}>
            <option value="featured">{dict.catalog.sortFeatured}</option>
            <option value="price-low">{dict.catalog.sortPriceLow}</option>
            <option value="price-high">{dict.catalog.sortPriceHigh}</option>
          </select>
        </label>
      </div>
      <div className="catalog__count">
        <h2 id="catalog-title">{dict.catalog.heading}</h2>
        <p>{dict.catalog.count(visibleProducts.length)}</p>
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
