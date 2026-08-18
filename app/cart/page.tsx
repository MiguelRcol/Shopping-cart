import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisa y ajusta los artículos de tu carrito STRIDE.",
};

export default function CartPage() {
  return <CartView />;
}

