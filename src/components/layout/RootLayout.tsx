import type { ReactNode } from "react";
import { CartProvider } from "@/components/cart/CartProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <SiteHeader />
      <main id="contenido-principal">{children}</main>
      <SiteFooter />
    </CartProvider>
  );
}
