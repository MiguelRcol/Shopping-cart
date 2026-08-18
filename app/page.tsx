import type { Metadata } from "next";
import Link from "next/link";
import { fallbackProducts } from "@/lib/fallback-products";
import { formatCurrency } from "@/lib/shop";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "STRIDE: calzado y equipo deportivo para correr, entrenar y moverte a tu ritmo.",
};

const featuredProducts = fallbackProducts.slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="section-kicker section-kicker--light">Colección 01 / 2026</p>
          <h1>
            Supera
            <br />
            tu ritmo<span>.</span>
          </h1>
          <p className="home-hero__intro">
            Equipo diseñado para moverse contigo. Del primer paso al último
            kilómetro.
          </p>
          <div className="home-hero__actions">
            <Link className="button button--lime" href="/shop">
              Comprar ahora <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link text-link--light" href="#novedades">
              Ver novedades <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="home-hero__meta" aria-hidden="true">
            <span>STRIDE / MOVE FORWARD</span>
            <span>BOG / 4.7110° N</span>
          </div>
        </div>
        <div className="home-hero__visual">
          <img
            src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1800&q=90"
            alt="Atleta corriendo al aire libre durante un entrenamiento"
            width="1200"
            height="1500"
            fetchPriority="high"
          />
          <div className="home-hero__stamp" aria-hidden="true">
            <span>01</span>
            <small>RUN / TRAIN / LIVE</small>
          </div>
        </div>
      </section>

      <section className="movement-strip" aria-label="Categorías principales">
        <p>Corre</p>
        <span aria-hidden="true">✦</span>
        <p>Entrena</p>
        <span aria-hidden="true">✦</span>
        <p>Vive</p>
        <span aria-hidden="true">✦</span>
      </section>

      <section className="home-featured" id="novedades">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selección / 01</p>
            <h2>Lo nuevo se mueve rápido.</h2>
          </div>
          <Link className="text-link" href="/shop">
            Ver todo <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product, index) => (
            <Link className="featured-card" href="/shop" key={product.id}>
              <div className="featured-card__image">
                <img
                  src={product.image}
                  alt={product.alt}
                  width="640"
                  height="720"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="featured-card__copy">
                <div>
                  <p>{product.collection}</p>
                  <h3>{product.title}</h3>
                </div>
                <p>{formatCurrency(product.priceCents)} USD</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="category-editorial">
        <article className="category-editorial__image">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=90"
            alt="Atleta entrenando fuerza en un gimnasio luminoso"
            width="1200"
            height="1100"
            loading="lazy"
            decoding="async"
          />
          <span aria-hidden="true">TRAIN / 02</span>
        </article>
        <article className="category-editorial__copy">
          <p className="section-kicker">Diseñado para el movimiento</p>
          <h2>Sin excusas. Sin atajos.</h2>
          <p>
            Piezas esenciales, materiales resistentes y comodidad para todos
            los días. Tu ritmo cambia; tu equipo responde.
          </p>
          <Link className="button button--light" href="/shop">
            Descubrir training <span aria-hidden="true">↗</span>
          </Link>
        </article>
      </section>

      <section className="brand-manifesto">
        <p className="section-kicker">STRIDE / Manifiesto</p>
        <p className="brand-manifesto__text">
          No importa dónde empiezas. Importa que sigues avanzando.
        </p>
        <div className="brand-manifesto__footer">
          <span>Hecho para cada paso.</span>
          <span aria-hidden="true">→ → →</span>
        </div>
      </section>
    </>
  );
}

