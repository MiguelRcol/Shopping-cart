export type ProductCategory = "Calzado" | "Accesorios";

export type Product = {
  id: string;
  title: string;
  category: ProductCategory;
  collection: string;
  priceCents: number;
  image: string;
  alt: string;
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

export function formatCurrency(priceCents: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 2,
  }).format(priceCents / 100);
}

export function formatItemCount(quantity: number) {
  return `${quantity} ${quantity === 1 ? "artículo" : "artículos"}`;
}

