import { CartView } from "@/components/cart/CartView";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useI18n } from "@/i18n/I18nContext";

export function Cart() {
  const { dict } = useI18n();
  useDocumentTitle(dict.cart.pageTitle);

  return <CartView />;
}
