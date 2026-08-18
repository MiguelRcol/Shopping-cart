import { describe, expect, it } from "vitest";
import { getProducts, products } from "@/lib/products";

describe("product catalog", () => {
  it("exposes every product with the fields the UI depends on", () => {
    expect(products.length).toBeGreaterThan(0);
    for (const product of products) {
      expect(product.id).toMatch(/^stride-/);
      expect(product.title.length).toBeGreaterThan(0);
      expect(["shoes", "accessories"]).toContain(product.category);
      expect(Number.isFinite(product.priceCents)).toBe(true);
      expect(product.priceCents).toBeGreaterThan(0);
      expect(product.image).toMatch(/^https:\/\/images\.unsplash\.com\//);
    }
  });

  it("has a unique id per product", () => {
    const ids = products.map((product) => product.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("resolves the full catalog", async () => {
    await expect(getProducts()).resolves.toEqual(products);
  });
});
