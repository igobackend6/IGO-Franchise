import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { TIERS } from "../data/franchiseData";

export default function InvestmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Investment & Support</span>
          <h1>Three ways to start, all backed by the same playbook.</h1>
          <p>
            Exact figures vary by vertical and city — this is the support
            structure that comes with every tier.
          </p>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="tiers">
            {TIERS.map((tier) => (
              <Reveal
                key={tier.id}
                className={`tier ${tier.featured ? "featured" : ""}`}
              >
                {tier.featured && <span className="tier-badge">Most Chosen</span>}
                <h3>{tier.name}</h3>
                <div className="price">{tier.price}</div>
                <p className="tier-desc">{tier.desc}</p>
                <ul>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/apply"
                  className={`btn btn-block ${tier.featured ? "btn-gold" : "btn-dark"}`}
                >
                  {tier.cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
