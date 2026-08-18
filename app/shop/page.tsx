import type { Metadata } from "next";
import { ShopCatalog } from "@/components/products/ShopCatalog";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Explora la colección STRIDE de calzado y accesorios deportivos.",
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <section className="shop-hero">
        <div className="shop-hero__topline">
          <p className="section-kicker">Tienda / Colección completa</p>
          <p>Temporada 2026</p>
        </div>
        <h1>Equípate.<br />Supera tu marca.</h1>
        <div className="shop-hero__footer">
          <p>
            Calzado y accesorios seleccionados para el entrenamiento, la calle
            y todo lo que hay entre ambos.
          </p>
          <span aria-hidden="true">Desliza para explorar ↓</span>
        </div>
      </section>
      <ShopCatalog products={products} />
    </>
  );
}

