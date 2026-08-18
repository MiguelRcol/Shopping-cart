import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useI18n } from "@/i18n/I18nContext";
import { products } from "@/lib/products";
import { formatCurrency } from "@/lib/shop";

const featuredProducts = products.slice(0, 4);

export function Home() {
  const { dict, locale } = useI18n();
  useDocumentTitle(dict.home.pageTitle);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="section-kicker section-kicker--light">{dict.home.kicker}</p>
          <h1>
            {dict.home.titleLine1}
            <br />
            {dict.home.titleLine2}
            <span>.</span>
          </h1>
          <p className="home-hero__intro">{dict.home.intro}</p>
          <div className="home-hero__actions">
            <Link className="button button--lime" to="/shop">
              {dict.home.ctaShop} <span aria-hidden="true">↗</span>
            </Link>
            <a className="text-link text-link--light" href="#novedades">
              {dict.home.ctaNews} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="home-hero__meta" aria-hidden="true">
            <span>{dict.home.metaBrand}</span>
            <span>{dict.home.metaLocation}</span>
          </div>
        </div>
        <div className="home-hero__visual">
          <img
            src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1800&q=90"
            alt={dict.home.heroImageAlt}
            width="1200"
            height="1500"
            fetchPriority="high"
          />
          <div className="home-hero__stamp" aria-hidden="true">
            <span>01</span>
            <small>{dict.home.heroStampLabel}</small>
          </div>
        </div>
      </section>

      <section className="movement-strip" aria-label={dict.home.categoriesAria}>
        <p>{dict.home.catRun}</p>
        <span aria-hidden="true">✦</span>
        <p>{dict.home.catTrain}</p>
        <span aria-hidden="true">✦</span>
        <p>{dict.home.catLive}</p>
        <span aria-hidden="true">✦</span>
      </section>

      <section className="home-featured" id="novedades">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{dict.home.featuredKicker}</p>
            <h2>{dict.home.featuredTitle}</h2>
          </div>
          <Link className="text-link" to="/shop">
            {dict.home.viewAll} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product, index) => (
            <Link className="featured-card" to="/shop" key={product.id}>
              <div className="featured-card__image">
                <img
                  src={product.image}
                  alt={dict.product.alt(product.title, product.category)}
                  width="640"
                  height="720"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="featured-card__copy">
                <div>
                  <p>
                    {product.collectionLine} / {dict.audiences[product.audience]}
                  </p>
                  <h3>{product.title}</h3>
                </div>
                <p>{formatCurrency(product.priceCents, locale)} USD</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="category-editorial">
        <article className="category-editorial__image">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=90"
            alt={dict.home.editorialImageAlt}
            width="1200"
            height="1100"
            loading="lazy"
            decoding="async"
          />
          <span aria-hidden="true">{dict.home.editorialStamp}</span>
        </article>
        <article className="category-editorial__copy">
          <p className="section-kicker">{dict.home.editorialKicker}</p>
          <h2>{dict.home.editorialTitle}</h2>
          <p>{dict.home.editorialBody}</p>
          <Link className="button button--light" to="/shop">
            {dict.home.editorialCta} <span aria-hidden="true">↗</span>
          </Link>
        </article>
      </section>

      <section className="brand-manifesto">
        <p className="section-kicker">{dict.home.manifestoKicker}</p>
        <p className="brand-manifesto__text">{dict.home.manifestoText}</p>
        <div className="brand-manifesto__footer">
          <span>{dict.home.manifestoFooter}</span>
          <span aria-hidden="true">→ → →</span>
        </div>
      </section>
    </>
  );
}
