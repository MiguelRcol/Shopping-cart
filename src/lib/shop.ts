import type { Locale } from "@/i18n/types";

export type ProductCategory = "shoes" | "accessories";

export type Audience = "men" | "women" | "unisex";

export type CollectionLine =
  | "Running"
  | "Training"
  | "Outdoor"
  | "Lifestyle"
  | "Footwear"
  | "Equipment";

export type Product = {
  id: string;
  title: string;
  category: ProductCategory;
  collectionLine: CollectionLine;
  audience: Audience;
  priceCents: number;
  image: string;
  rating?: number;
  isNew?: boolean;
};

export type CartLine = {
  product: Product;
  quantity: number;
};

export const MAX_QUANTITY = 99;

export function clampQuantity(value: number, minimum = 1) {
  if (!Number.isFinite(value)) return minimum;
  return Math.min(MAX_QUANTITY, Math.max(minimum, Math.trunc(value)));
}

const CURRENCY_LOCALE: Record<Locale, string> = {
  es: "es-CO",
  en: "en-US",
};

export function formatCurrency(priceCents: number, locale: Locale = "es") {
  return new Intl.NumberFormat(CURRENCY_LOCALE[locale], {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 2,
  }).format(priceCents / 100);
}
