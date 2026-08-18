import type { Product } from "./shop";

/**
 * STRIDE's product catalog. Every image is a real, static product
 * photograph (no AI-generated renders, no action/motion shots) sourced
 * from Unsplash. This is an educational demo project rather than a real
 * store, so several photos show real footwear as it was actually
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
    id: "stride-air-zero",
    title: "Air Zero",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 10900,
    image:
      "https://images.unsplash.com/photo-1625860191460-10a66c7384fb?auto=format&fit=crop&w=1200&q=85",
    rating: 4.6,
    isNew: true,
  },
  {
    id: "stride-velocity-blue",
    title: "Velocity Blue",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 12800,
    image:
      "https://images.unsplash.com/photo-1746206673199-5b75dcec1018?auto=format&fit=crop&w=1200&q=85",
    rating: 4.7,
  },
  {
    id: "stride-momentum-x",
    title: "Momentum X",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 14900,
    image:
      "https://images.unsplash.com/photo-1768647417374-5a31c61dc5d0?auto=format&fit=crop&w=1200&q=85",
    rating: 4.9,
    isNew: true,
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
    id: "stride-featherlight",
    title: "Featherlight",
    category: "shoes",
    collectionLine: "Running",
    audience: "unisex",
    priceCents: 15500,
    image:
      "https://images.unsplash.com/photo-1525401919108-97462bd24fe4?auto=format&fit=crop&w=1200&q=85",
    rating: 4.7,
  },
  {
    id: "stride-hoop-flash",
    title: "Hoop Flash",
    category: "shoes",
    collectionLine: "Training",
    audience: "unisex",
    priceCents: 13500,
    image:
      "https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?auto=format&fit=crop&w=1200&q=85",
    rating: 4.6,
  },
  {
    id: "stride-court-flex",
    title: "Court Flex",
    category: "shoes",
    collectionLine: "Training",
    audience: "unisex",
    priceCents: 13900,
    image:
      "https://images.unsplash.com/photo-1710553455716-a0d7ad18452b?auto=format&fit=crop&w=1200&q=85",
    rating: 4.5,
  },
  {
    id: "stride-boost-drift",
    title: "Boost Drift",
    category: "shoes",
    collectionLine: "Training",
    audience: "unisex",
    priceCents: 14500,
    image:
      "https://images.unsplash.com/photo-1569736135277-1cad6189a532?auto=format&fit=crop&w=1200&q=85",
    rating: 4.7,
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
    id: "stride-midnight-high",
    title: "Midnight High",
    category: "shoes",
    collectionLine: "Training",
    audience: "unisex",
    priceCents: 12500,
    image:
      "https://images.unsplash.com/photo-1559050993-d4e4fbf11769?auto=format&fit=crop&w=1200&q=85",
    rating: 4.5,
  },
  {
    id: "stride-night-profile",
    title: "Night Profile",
    category: "shoes",
    collectionLine: "Lifestyle",
    audience: "unisex",
    priceCents: 14500,
    image:
      "https://images.unsplash.com/photo-1755194757953-a9301005114b?auto=format&fit=crop&w=1200&q=85",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "stride-street-form",
    title: "Street Form",
    category: "shoes",
    collectionLine: "Lifestyle",
    audience: "unisex",
    priceCents: 9900,
    image:
      "https://images.unsplash.com/photo-1634316427425-722247ebe036?auto=format&fit=crop&w=1200&q=85",
    rating: 4.4,
  },
  {
    id: "stride-cloud-step",
    title: "Cloud Step",
    category: "shoes",
    collectionLine: "Lifestyle",
    audience: "unisex",
    priceCents: 11500,
    image:
      "https://images.unsplash.com/photo-1622760807800-66cf1466fc08?auto=format&fit=crop&w=1200&q=85",
    rating: 4.5,
  },
  {
    id: "stride-retro-roam",
    title: "Retro Roam",
    category: "shoes",
    collectionLine: "Lifestyle",
    audience: "unisex",
    priceCents: 9500,
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1200&q=85",
    rating: 4.4,
    isNew: true,
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
    id: "stride-trail-runner",
    title: "Trail Runner",
    category: "shoes",
    collectionLine: "Outdoor",
    audience: "unisex",
    priceCents: 12200,
    image:
      "https://images.unsplash.com/photo-1696191345363-5653919d8a8e?auto=format&fit=crop&w=1200&q=85",
    rating: 4.7,
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
