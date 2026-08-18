import Link from "next/link";

export default function NotFound() {
  return (
    <section className="empty-cart">
      <p className="section-kicker">Error / 404</p>
      <h1>Esta ruta no lleva a ningún lado.</h1>
      <p>Vuelve a la pista y sigue explorando la colección.</p>
      <Link className="button button--lime" href="/">
        Volver al inicio <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}

