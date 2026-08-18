import type { Product } from "@/lib/shop";

export const shoe: Product = {
  id: "test-shoe",
  title: "Tempo Test",
  category: "Calzado",
  collection: "Running / Unisex",
  priceCents: 12500,
  image: "https://example.com/shoe.jpg",
  alt: "Zapatilla Tempo Test",
  rating: 4.8,
  isNew: true,
};

export const bag: Product = {
  id: "test-bag",
  title: "Pack Test",
  category: "Accesorios",
  collection: "Equipment / Unisex",
  priceCents: 5000,
  image: "https://example.com/bag.jpg",
  alt: "Mochila Pack Test",
};

