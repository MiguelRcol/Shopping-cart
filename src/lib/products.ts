import type { Product } from "./shop";

/**
 * STRIDE's product catalog. Every image is a real, hand-picked photograph
 * (no AI-generated renders) sourced from Unsplash and checked individually
 * to avoid frames that show a third-party brand name or logo — the goal is
 * a shop that looks and feels real without borrowing anyone else's mark.
 * See README.md for the photography license note.
 */
export const products: Product[] = [
  {
    id: "stride-pulse-runner",
    title: "Pulse Runner",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 12900,
    image:
      "https://images.unsplash.com/photo-1765914448100-0845241f7481?auto=format&fit=crop&w=1200&q=85",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "stride-track-racer",
    title: "Track Racer",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 13500,
    image:
      "https://images.unsplash.com/photo-1766970096346-937852c7d350?auto=format&fit=crop&w=1200&q=85",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "stride-shadow-runner",
    title: "Shadow Runner",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 11800,
    image:
      "https://images.unsplash.com/photo-1758506971683-c080e6f16ce9?auto=format&fit=crop&w=1200&q=85",
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
    id: "stride-trail-runner",
    title: "Trail Runner",
    category: "shoes",
    collectionLine: "Training",
    audience: "unisex",
    priceCents: 12200,
    image:
      "https://images.unsplash.com/photo-1762709753316-591427724237?auto=format&fit=crop&w=1200&q=85",
    rating: 4.6,
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
    id: "stride-wanderer-suede",
    title: "Wanderer Suede",
    category: "shoes",
    collectionLine: "Lifestyle",
    audience: "unisex",
    priceCents: 10500,
    image:
      "https://images.unsplash.com/photo-1540691737051-481176b5c92d?auto=format&fit=crop&w=1200&q=85",
    rating: 4.5,
    isNew: true,
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
