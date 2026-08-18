export default function ShopLoading() {
  return (
    <div className="shop-loading" role="status">
      <p className="section-kicker">Tienda</p>
      <h1>Preparando la colección…</h1>
      <div className="shop-loading__grid" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

