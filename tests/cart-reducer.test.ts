import { describe, expect, it } from "vitest";
import { cartReducer, parseStoredCart } from "@/components/cart/CartProvider";
import { bag, shoe } from "./fixtures";

describe("cartReducer", () => {
  it("adds a product and combines repeated additions", () => {
    const first = cartReducer(
      { lines: [] },
      { type: "add", product: shoe, quantity: 2 },
    );
    const second = cartReducer(first, {
      type: "add",
      product: shoe,
      quantity: 3,
    });

    expect(second.lines).toHaveLength(1);
    expect(second.lines[0].quantity).toBe(5);
  });

  it("updates a line and removes it when its quantity reaches zero", () => {
    const state = { lines: [{ product: shoe, quantity: 2 }] };
    const updated = cartReducer(state, {
      type: "set",
      productId: shoe.id,
      quantity: 7,
    });
    const removed = cartReducer(updated, {
      type: "set",
      productId: shoe.id,
      quantity: 0,
    });

    expect(updated.lines[0].quantity).toBe(7);
    expect(removed.lines).toEqual([]);
  });

  it("clears every cart line", () => {
    const state = {
      lines: [
        { product: shoe, quantity: 1 },
        { product: bag, quantity: 2 },
      ],
    };
    expect(cartReducer(state, { type: "clear" }).lines).toEqual([]);
  });
});

describe("parseStoredCart", () => {
  it("restores valid data and rejects corrupt data", () => {
    const valid = JSON.stringify([{ product: shoe, quantity: 3 }]);
    expect(parseStoredCart(valid)).toEqual([{ product: shoe, quantity: 3 }]);
    expect(parseStoredCart("not-json")).toEqual([]);
    expect(parseStoredCart(JSON.stringify([{ nope: true }]))).toEqual([]);
  });
});
