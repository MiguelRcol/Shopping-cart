import { fallbackProducts } from "./fallback-products";
import type { Product, ProductCategory } from "./shop";

type DummyProduct = {
  id?: number;
  title?: string;
  price?: number;
  category?: string;
  brand?: string;
  thumbnail?: string;
  images?: string[];
  rating?: number;
};

const PRODUCT_ENDPOINTS = [
  "https://dummyjson.com/products/category/mens-shoes?limit=6",
  "https://dummyjson.com/products/category/womens-shoes?limit=6",
  "https://dummyjson.com/products/category/sports-accessories?limit=6",
];

function normalizeCategory(category = ""): ProductCategory {
  return category.includes("accessories") ? "Accesorios" : "Calzado";
}

export function normalizeProduct(product: DummyProduct): Product | null {
  if (
    typeof product.id !== "number" ||
    !product.title ||
    typeof product.price !== "number"
  ) {
    return null;
  }

  const image = product.thumbnail ?? product.images?.[0];
  if (!image) return null;

  const category = normalizeCategory(product.category);

  return {
    id: `api-${product.id}`,
    title: product.title,
    category,
    collection:
      category === "Accesorios"
        ? "Equipment / Unisex"
        : product.category === "womens-shoes"
          ? "Footwear / Mujer"
          : "Footwear / Hombre",
    priceCents: Math.round(product.price * 100),
    image,
    alt: `${product.title}, producto deportivo de la colección STRIDE Select`,
    rating: product.rating,
    isNew: product.id % 3 === 0,
  };
}

export async function getProducts(
  fetcher: typeof fetch = fetch,
): Promise<Product[]> {
  try {
    const responses = await Promise.all(
      PRODUCT_ENDPOINTS.map((url) =>
        fetcher(url, {
          headers: { Accept: "application/json" },
          signal: AbortSignal.timeout(5000),
        }),
      ),
    );

    if (responses.some((response) => !response.ok)) {
      throw new Error("El catálogo remoto no está disponible");
    }

    const payloads = (await Promise.all(
      responses.map((response) => response.json()),
    )) as Array<{ products?: DummyProduct[] }>;

    const products = payloads
      .flatMap((payload) => payload.products ?? [])
      .map(normalizeProduct)
      .filter((product): product is Product => product !== null)
      .slice(0, 12);

    return products.length >= 6 ? products : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
}

