import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { BRANDS } from "../data/franchiseData";

const REAL_BRANDS = BRANDS.filter((b) => !b.comingSoon);
const TRACK = [...REAL_BRANDS, ...REAL_BRANDS];

export default function ProductsCarousel() {
  return (
    <section className="sec products-sec" id="products">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Our Ecosystem</span>
          <h2>IGO Products &amp; Verticals</h2>
          <p>Explore our diverse range of products and services designed to build a sustainable agricultural ecosystem.</p>
        </Reveal>
      </div>
      <Reveal className="products-carousel-wrap" as="div">
        <div className="products-track">
          {TRACK.map((brand, i) => (
            <div className="product-card" key={`${brand.name}-${i}`}>
              <div className="product-img-wrap">
                <SmartImage src={brand.image} alt={brand.name} />
              </div>
              <div className="product-info">
                <h3>{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
