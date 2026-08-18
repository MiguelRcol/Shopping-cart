import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { CartProvider } from "@/components/cart/CartProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { render, screen } from "./test-utils";

describe("language switch", () => {
  it("defaults to Spanish on first visit", () => {
    render(
      <CartProvider>
        <SiteHeader />
      </CartProvider>,
    );

    expect(screen.getByRole("link", { name: "Inicio" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Tienda" })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("es");
  });

  it("switches every visible string to English and remembers the choice", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <SiteHeader />
      </CartProvider>,
    );

    await user.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(window.localStorage.getItem("stride:locale:v1")).toBe("en");

    await user.click(screen.getByRole("button", { name: "Español" }));
    expect(screen.getByRole("link", { name: "Inicio" })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("es");
  });
});
