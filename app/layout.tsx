import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: {
      default: "STRIDE — Supera tu ritmo",
      template: "%s — STRIDE",
    },
    description:
      "Calzado y equipo deportivo para correr, entrenar y moverte a tu ritmo.",
    applicationName: "STRIDE",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    keywords: ["tienda deportiva", "calzado", "running", "training", "STRIDE"],
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: "STRIDE",
      title: "STRIDE — Supera tu ritmo",
      description: "Equipo diseñado para moverse contigo.",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "STRIDE — Supera tu ritmo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "STRIDE — Supera tu ritmo",
      description: "Equipo diseñado para moverse contigo.",
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          <SiteHeader />
          <main id="contenido-principal">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
