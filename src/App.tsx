import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";
import { I18nProvider } from "@/i18n/I18nContext";
import { Cart } from "@/pages/Cart";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Shop } from "@/pages/Shop";

// Vite's BASE_URL mirrors the `base` build option (e.g. "/" on Netlify,
// Vercel and Cloudflare Pages, or "/repo-name/" on a GitHub Pages project
// site). BrowserRouter wants it without the trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export function App() {
  return (
    <I18nProvider>
      <BrowserRouter basename={basename}>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </I18nProvider>
  );
}
