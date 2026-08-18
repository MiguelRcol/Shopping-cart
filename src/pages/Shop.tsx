import { useEffect, useState } from "react";
import { ShopCatalog } from "@/components/products/ShopCatalog";
import { ShopLoading } from "@/components/products/ShopLoading";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useI18n } from "@/i18n/I18nContext";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/shop";

export function Shop() {
  const { dict } = useI18n();
  useDocumentTitle(dict.shop.pageTitle);
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getProducts().then((result) => {
      if (!cancelled) setProducts(result);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <section className="shop-hero">
        <div className="shop-hero__topline">
          <p className="section-kicker">{dict.shop.kicker}</p>
          <p>{dict.shop.season}</p>
        </div>
        <h1>
          {dict.shop.titleLine1}
          <br />
          {dict.shop.titleLine2}
        </h1>
        <div className="shop-hero__footer">
          <p>{dict.shop.intro}</p>
          <span aria-hidden="true">{dict.shop.scrollHint}</span>
        </div>
      </section>
      {products === null ? <ShopLoading /> : <ShopCatalog products={products} />}
    </>
  );
}
