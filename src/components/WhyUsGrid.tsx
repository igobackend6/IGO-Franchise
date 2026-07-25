import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { WHY_US, WHY_US_HERO_IMAGE } from "../data/franchiseData";

type WhyUsGridProps = {
  showIntro?: boolean;
};

export default function WhyUsGrid({ showIntro = true }: WhyUsGridProps) {
  return (
    <>
      {showIntro && (
        <div className="why-intro-grid">
          <Reveal className="sec-head" as="div" >
            <span className="eyebrow">Why Franchise With IGO</span>
            <h2>The backing of a full agricultural ecosystem, not just a brand name.</h2>
            <p>
              Every IGO franchise unit plugs directly into the Group's supply
              chain, R&amp;D, and consumer trust — built over years of
              on-ground work with Indian farmers.
            </p>
          </Reveal>
          <Reveal className="why-hero-shot" as="div">
            <SmartImage src={WHY_US_HERO_IMAGE} alt="A complete agriculture ecosystem" />
          </Reveal>
        </div>
      )}
      <div className="why-grid">
        {WHY_US.map((card) => (
          <Reveal key={card.title} className="why-card">
            <div className="why-card-img">
              <SmartImage src={card.image} alt={card.title} />
            </div>
            <div className="why-card-body">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
