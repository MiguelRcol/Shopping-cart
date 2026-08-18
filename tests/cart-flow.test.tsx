import { waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  CART_STORAGE_KEY,
  CartProvider,
  useCart,
} from "@/components/cart/CartProvider";
import { CartView } from "@/components/cart/CartView";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { ShopCatalog } from "@/components/products/ShopCatalog";
import { bag, shoe } from "./fixtures";
import { render, screen } from "./test-utils";

function CartProbe() {
  const { totalQuantity, lines } = useCart();
  return (
    <output aria-label="Resumen de prueba">
      {totalQuantity} unidades / {lines.length} líneas
    </output>
  );
}

describe("shopping cart flow", () => {
  it("renders the three navigation destinations and an empty count", async () => {
    render(
      <CartProvider>
        <SiteHeader />
      </CartProvider>,
    );

    expect(screen.getByRole("link", { name: "STRIDE, ir al inicio" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Tienda" })).toHaveAttribute("href", "/shop");
    expect(await screen.findByRole("link", { name: "Carrito, 0 artículos" })).toHaveAttribute("href", "/cart");
  });

  it("supports +, − and a manual quantity before adding", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <ProductCard product={shoe} />
        <CartProbe />
      </CartProvider>,
    );

    const input = screen.getByRole("spinbutton", { name: `Cantidad de ${shoe.title}` });
    const decrease = screen.getByRole("button", { name: `Reducir cantidad de ${shoe.title}` });
    expect(input).toHaveValue(1);
    expect(decrease).toBeDisabled();

    await user.click(screen.getByRole("button", { name: `Aumentar cantidad de ${shoe.title}` }));
    expect(input).toHaveValue(2);
    await user.clear(input);
    await user.type(input, "3");
    expect(input).toHaveValue(3);
    await user.click(screen.getByRole("button", { name: "Añadir al carrito" }));

    expect(screen.getByLabelText("Resumen de prueba")).toHaveTextContent("3 unidades / 1 líneas");
  });

  it("updates the navbar count in real time and merges the same product", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <SiteHeader />
        <ProductCard product={shoe} />
      </CartProvider>,
    );

    const addButton = screen.getByRole("button", { name: "Añadir al carrito" });
    await user.click(addButton);
    await user.click(screen.getByRole("button", { name: "Añadido ✓" }));

    expect(screen.getByRole("link", { name: "Carrito, 2 artículos" })).toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) ?? "[]")).toHaveLength(1);
  });

  it("restores cart items, calculates totals, and allows removal", async () => {
    const user = userEvent.setup();
    window.localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify([{ product: shoe, quantity: 2 }]),
    );
    render(
      <CartProvider>
        <CartView />
      </CartProvider>,
    );

    expect(await screen.findByRole("heading", { name: "Tu equipo." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: shoe.title })).toBeInTheDocument();
    expect(screen.getAllByText(/250,00 USD/).length).toBeGreaterThan(0);

    await user.click(screen.getByRole("button", { name: "Eliminar" }));
    expect(await screen.findByRole("heading", { name: "Tu carrito aún no arrancó." })).toBeInTheDocument();
  });

  it("removes a cart line when decrementing its last unit", async () => {
    const user = userEvent.setup();
    window.localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify([{ product: bag, quantity: 1 }]),
    );
    render(
      <CartProvider>
        <CartView />
      </CartProvider>,
    );

    const removeUnit = await screen.findByRole("button", { name: `Eliminar ${bag.title} del carrito` });
    await user.click(removeUnit);
    expect(await screen.findByRole("heading", { name: "Tu carrito aún no arrancó." })).toBeInTheDocument();
  });

  it("filters the catalog by product category", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <ShopCatalog products={[shoe, bag]} />
      </CartProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Accesorios" }));
    const grid = screen.getByRole("heading", { name: "Colección completa" }).parentElement?.parentElement;
    expect(grid).toBeTruthy();
    expect(within(grid as HTMLElement).getByRole("heading", { name: bag.title })).toBeInTheDocument();
    expect(within(grid as HTMLElement).queryByRole("heading", { name: shoe.title })).not.toBeInTheDocument();
    await waitFor(() => expect(screen.getByText("01 productos")).toBeInTheDocument());
  });
});
