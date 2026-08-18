import { fallbackProducts } from "./fallback-products";
import type { Audience, CollectionLine, Product, ProductCategory } from "./shop";

type DummyProduct = {
  id?: number;
  title?: string;
  price?: number;
  category?: string;
  thumbnail?: string;
  images?: string[];
  rating?: number;
};

const PRODUCT_ENDPOINTS = [
  "https://dummyjson.com/products/category/mens-shoes?limit=6",
  "https://dummyjson.com/products/category/womens-shoes?limit=6",
  "https://dummyjson.com/products/category/sports-accessories?limit=6",
];

function classify(category = ""): {
  category: ProductCategory;
  collectionLine: CollectionLine;
  audience: Audience;
} {
  if (category.includes("accessories")) {
    return { category: "accessories", collectionLine: "Equipment", audience: "unisex" };
  }
  if (category.includes("womens")) {
    return { category: "shoes", collectionLine: "Footwear", audience: "women" };
  }
  return { category: "shoes", collectionLine: "Footwear", audience: "men" };
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

  return {
    id: `api-${product.id}`,
    title: product.title,
    ...classify(product.category),
    priceCents: Math.round(product.price * 100),
    image,
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
