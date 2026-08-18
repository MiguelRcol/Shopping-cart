import type { Product } from "./shop";

/**
 * STRIDE's product catalog. Every image is a real, static product
 * photograph (no AI-generated renders, no action/motion shots) sourced
 * from Unsplash. This is an educational demo project rather than a real
 * store, so a few photos show real footwear as it was actually
 * photographed — nothing here is presented as an original
 * STRIDE-manufactured product. See README.md for the photography license.
 */
export const products: Product[] = [
  {
    id: "stride-track-racer",
    title: "Track Racer",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 13500,
    image:
      "https://images.unsplash.com/photo-1637437757614-6491c8e915b5?auto=format&fit=crop&w=1200&q=85",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "stride-trail-runner",
    title: "Trail Runner",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 12200,
    image:
      "https://images.unsplash.com/photo-1696191345363-5653919d8a8e?auto=format&fit=crop&w=1200&q=85",
    rating: 4.7,
  },
  {
    id: "stride-night-profile",
    title: "Night Profile",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 14500,
    image:
      "https://images.unsplash.com/photo-1755194757953-a9301005114b?auto=format&fit=crop&w=1200&q=85",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "stride-trailblazer",
    title: "Trailblazer",
    category: "shoes",
    collectionLine: "Outdoor",
    audience: "unisex",
    priceCents: 13900,
    image:
      "https://images.unsplash.com/photo-1648475025487-603cb51af867?auto=format&fit=crop&w=1200&q=85",
    rating: 4.7,
  },
  {
    id: "stride-core-pack",
    title: "Core Pack 22L",
    category: "accessories",
    collectionLine: "Equipment",
    audience: "unisex",
    priceCents: 6800,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85",
    rating: 4.8,
  },
  {
    id: "stride-suede-trainer",
    title: "Suede Trainer",
    category: "shoes",
    collectionLine: "Training",
    audience: "unisex",
    priceCents: 11500,
    image:
      "https://images.unsplash.com/photo-1680254418556-3980c19d4304?auto=format&fit=crop&w=1200&q=85",
    rating: 4.6,
  },
  {
    id: "stride-wanderer-suede",
    title: "Wanderer Suede",
    category: "shoes",
    collectionLine: "Lifestyle",
    audience: "unisex",
    priceCents: 10500,
    image:
      "https://images.unsplash.com/photo-1540691737051-481176b5c92d?auto=format&fit=crop&w=1200&q=85",
    rating: 4.5,
  },
  {
    id: "stride-ridgeline",
    title: "Ridgeline",
    category: "shoes",
    collectionLine: "Outdoor",
    audience: "unisex",
    priceCents: 14200,
    image:
      "https://images.unsplash.com/photo-1528641638513-63e382072b5c?auto=format&fit=crop&w=1200&q=85",
    rating: 4.9,
  },
  {
    id: "stride-summit-trek",
    title: "Summit Trek",
    category: "shoes",
    collectionLine: "Outdoor",
    audience: "unisex",
    priceCents: 13500,
    image:
      "https://images.unsplash.com/photo-1645259041347-bde12b3c24d9?auto=format&fit=crop&w=1200&q=85",
    rating: 4.6,
  },
  {
    id: "stride-pace-cap",
    title: "Pace Cap",
    category: "accessories",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 3400,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=85",
    rating: 4.4,
  },
  {
    id: "stride-rib-sock-set",
    title: "Rib Sock Set",
    category: "accessories",
    collectionLine: "Training",
    audience: "unisex",
    priceCents: 2200,
    image:
      "https://images.unsplash.com/photo-1640025867572-f6b3a8410c81?auto=format&fit=crop&w=1200&q=85",
    rating: 4.5,
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}
