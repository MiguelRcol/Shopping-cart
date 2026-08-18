import type { Product } from "@/lib/shop";

export const shoe: Product = {
  id: "test-shoe",
  title: "Tempo Test",
  category: "shoes",
  collectionLine: "Running",
  audience: "unisex",
  priceCents: 12500,
  image: "https://example.com/shoe.jpg",
  rating: 4.8,
  isNew: true,
};

export const bag: Product = {
  id: "test-bag",
  title: "Pack Test",
  category: "accessories",
  collectionLine: "Equipment",
  audience: "unisex",
  priceCents: 5000,
  image: "https://example.com/bag.jpg",
};
