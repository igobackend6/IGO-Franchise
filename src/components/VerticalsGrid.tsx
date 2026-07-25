import { IGO_27_BRANDS } from "../data/franchiseData";

export default function VerticalsGrid() {
  // Double the list to create a seamless infinite scroll
  const doubled = [...IGO_27_BRANDS, ...IGO_27_BRANDS];

  return (
    <section className="brands-27-sec" id="verticals">
      {/* ── Section heading ─────────────────────────────── */}
      <div className="brands-27-head wrap">
        <div className="brands-27-eyebrow">
          <span className="brands-27-line" />
          <span>The Sovereign Ecosystem</span>
          <span className="brands-27-line" />
        </div>
        <h2 className="brands-27-title">
          The <em>27 Brands</em> of IGO.
        </h2>
        <p className="brands-27-sub">
          A sovereign agricultural ecosystem covering Engineering, Production,
          Trade, and Consumer Lifestyle.
        </p>
        <div className="brands-27-explore">
          <span>Explore All 27 Brands</span>
        </div>
      </div>

      {/* ── Scrolling carousel ──────────────────────────── */}
      <div className="brands-27-track-wrap">
        <div className="brands-27-track">
          {doubled.map((brand, i) => (
            <a
              key={`${brand.name}-${i}`}
              href={brand.link}
              target={brand.link !== "#" ? "_blank" : undefined}
              rel={brand.link !== "#" ? "noopener noreferrer" : undefined}
              className="brand-card-27"
              aria-label={brand.name}
            >
              {/* Dev badge */}
              {brand.status === "dev" && (
                <span className="brand-card-27__dev-badge">Dev</span>
              )}

              {/* Image area */}
              <div className="brand-card-27__img-wrap">
                <img
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const fallback = t.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Text-only fallback shown when image fails */}
                <div className="brand-card-27__img-fallback" style={{ display: "none" }}>
                  <span>{brand.name.charAt(0)}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="brand-card-27__body">
                <p className="brand-card-27__category">{brand.category}</p>
                <h3 className="brand-card-27__name">{brand.name}</h3>
                <p className="brand-card-27__desc">{brand.description}</p>
                <span
                  className={`brand-card-27__cta ${brand.status === "dev" ? "brand-card-27__cta--dev" : ""}`}
                >
                  {brand.statusLabel}
                  <span className="brand-card-27__arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
