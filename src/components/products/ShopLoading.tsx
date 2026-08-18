import { useI18n } from "@/i18n/I18nContext";

export function ShopLoading() {
  const { dict } = useI18n();

  return (
    <div className="shop-loading" role="status">
      <p className="section-kicker">{dict.shop.loadingKicker}</p>
      <h1>{dict.shop.loadingTitle}</h1>
      <div className="shop-loading__grid" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}
