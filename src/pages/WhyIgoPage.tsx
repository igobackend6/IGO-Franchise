import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import WhyUsGrid from "../components/WhyUsGrid";

export default function WhyIgoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Why Franchise With IGO</span>
          <h1>
            The backing of a full agricultural ecosystem, not just a brand
            name.
          </h1>
          <p>
            Every IGO franchise unit plugs directly into the Group's supply
            chain, R&amp;D, and consumer trust — built over years of
            on-ground work with Indian farmers.
          </p>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <WhyUsGrid showIntro={false} />

          <Reveal
            className="apply-sec"
            as="div"
          >
            <div style={{ position: "relative", zIndex: 2 }}>
              <span className="eyebrow on-dark">Ready to talk?</span>
              <h2>See if a vertical fits your city.</h2>
              <p style={{ marginBottom: 24 }}>
                Tell us your budget and location — we'll recommend the right
                IGO vertical for you.
              </p>
              <Link to="/apply" className="btn btn-gold">
                Start Your Application
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
