import { describe, expect, it, vi } from "vitest";
import { fallbackProducts } from "@/lib/fallback-products";
import { getProducts, normalizeProduct } from "@/lib/products";

describe("product catalog", () => {
  it("normalizes products from the remote API", () => {
    expect(
      normalizeProduct({
        id: 7,
        title: "Runner 7",
        price: 99.5,
        category: "mens-shoes",
        thumbnail: "https://example.com/runner.jpg",
        rating: 4.6,
      }),
    ).toMatchObject({
      id: "api-7",
      title: "Runner 7",
      priceCents: 9950,
      category: "Calzado",
    });
  });

  it("fetches and combines remote catalog categories", async () => {
    const products = Array.from({ length: 3 }, (_, index) => ({
      id: index + 1,
      title: `Runner ${index + 1}`,
      price: 90 + index,
      category: "mens-shoes",
      thumbnail: `https://example.com/${index + 1}.jpg`,
    }));
    const fetcher = vi.fn(async () =>
      new Response(JSON.stringify({ products }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    ) as unknown as typeof fetch;

    const result = await getProducts(fetcher);

    expect(fetcher).toHaveBeenCalledTimes(3);
    expect(result).toHaveLength(9);
    expect(result[0].title).toBe("Runner 1");
  });

  it("uses a local fallback when the API fails", async () => {
    const fetcher = vi.fn(async () => new Response("No", { status: 503 })) as unknown as typeof fetch;
    await expect(getProducts(fetcher)).resolves.toEqual(fallbackProducts);
  });
});

