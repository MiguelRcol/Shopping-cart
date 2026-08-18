export type Locale = "es" | "en";

export type Audience = "men" | "women" | "unisex";

export interface Dictionary {
  common: {
    skipToContent: string;
    brandName: string;
    titleTemplate: (pageTitle: string) => string;
    itemCount: (quantity: number) => string;
  };
  languageSwitch: {
    label: string;
  };
  header: {
    promoShipping: string;
    promoReturns: string;
    promoCta: string;
    brandAria: string;
    navAria: string;
    navHome: string;
    navShop: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    menuOpenAria: string;
    menuCloseAria: string;
    cartLabel: string;
    cartAria: (itemsLabel: string) => string;
  };
  footer: {
    lead: string;
    viewCollection: string;
    tagline: string;
    copyright: string;
  };
  home: {
    pageTitle: string;
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    ctaShop: string;
    ctaNews: string;
    heroImageAlt: string;
    heroStampLabel: string;
    metaBrand: string;
    metaLocation: string;
    categoriesAria: string;
    catRun: string;
    catTrain: string;
    catLive: string;
    featuredKicker: string;
    featuredTitle: string;
    viewAll: string;
    editorialImageAlt: string;
    editorialStamp: string;
    editorialKicker: string;
    editorialTitle: string;
    editorialBody: string;
    editorialCta: string;
    manifestoKicker: string;
    manifestoText: string;
    manifestoFooter: string;
  };
  shop: {
    pageTitle: string;
    kicker: string;
    season: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    scrollHint: string;
    loadingKicker: string;
    loadingTitle: string;
  };
  catalog: {
    filtersAria: string;
    filterAll: string;
    filterShoes: string;
    filterAccessories: string;
    sortLabel: string;
    sortFeatured: string;
    sortPriceLow: string;
    sortPriceHigh: string;
    heading: string;
    count: (visibleCount: number) => string;
  };
  audiences: Record<Audience, string>;
  product: {
    newBadge: string;
    ratingAria: (rating: string) => string;
    add: string;
    added: string;
    alt: (title: string, category: "shoes" | "accessories") => string;
  };
  quantity: {
    label: (name: string) => string;
    decreaseAria: (name: string) => string;
    removeAtZeroAria: (name: string) => string;
    increaseAria: (name: string) => string;
  };
  cart: {
    pageTitle: string;
    loading: string;
    kicker: (lineCount: number) => string;
    emptyTitle: string;
    emptyBody: string;
    exploreCta: string;
    title: string;
    itemsHeading: string;
    clear: string;
    perUnit: string;
    remove: string;
    summaryKicker: string;
    summaryTitle: string;
    subtotal: string;
    shipping: string;
    free: string;
    total: string;
    progressAria: string;
    remaining: (formattedAmount: string) => string;
    earned: string;
    checkout: string;
    demoCaption: string;
    demoNotice: string;
  };
  cartStatus: {
    added: (quantity: number, title: string) => string;
    updated: string;
    removed: string;
    cleared: string;
  };
  notFound: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };
}
