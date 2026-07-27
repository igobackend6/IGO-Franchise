import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";

const STATS_GLANCE = [
  { value: 26, suffix: "+", label: "Business Verticals", desc: "Wide range of profitable agri business opportunities" },
  { value: 100, suffix: "+", label: "Franchise Partners", desc: "Growing network of successful partners" },
  { value: 150, suffix: "+", label: "Cities Presence", desc: "Pan India presence and expanding every day" },
  { value: 100, suffix: "%", label: "Training & Support", desc: "Complete training and lifetime handholding" },
  { value: 5, suffix: "+", label: "Years of Excellence", desc: "Proven expertise in agritech industry" },
  { value: 1000, suffix: "+", label: "Happy Customers", desc: "Satisfied customers and growing" },
];

const CORE_VALUES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: "Innovation",
    desc: "We embrace new ideas and technologies to bring the best solutions.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Integrity",
    desc: "We believe in honest, transparent and ethical business practices.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Partnership",
    desc: "We grow together with our partners and celebrate their success.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Commitment",
    desc: "We are committed to quality, consistency and long-term relationships.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22 16 8M3.5 6.5 5 5l5.5 1L17 0l2 2-6.5 6.5 1 5.5-1.5 1.5-6-6z"/>
      </svg>
    ),
    title: "Sustainability",
    desc: "We promote sustainable agriculture for a greener tomorrow.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
      </svg>
    ),
    title: "Empowerment",
    desc: "We empower individuals to build independent and profitable businesses.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="about-hero">
        <div className="wrap">
          <div className="about-hero-grid">
            {/* Left content */}
            <div className="about-hero-content">
              <Reveal>
                <span className="about-eyebrow">ABOUT US</span>
                <h1 className="about-h1">
                  Empowering Agriculture.<br />
                  <span className="about-h1-green">Enriching Lives.</span>
                </h1>
                <div className="about-h1-line" />
                <p className="about-hero-desc">
                  IGO Agritech Farms is India's leading agritech company committed to building a sustainable future through innovation, knowledge and empowering entrepreneurs.
                </p>
              </Reveal>

              <Reveal className="about-mvp">
                <div className="about-mvp-item">
                  <div className="about-mvp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/><path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Our Mission</h3>
                    <p>To empower entrepreneurs and transform agriculture through innovative solutions and end-to-end support.</p>
                  </div>
                </div>
                <div className="about-mvp-item">
                  <div className="about-mvp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2"/><path d="M12 5C8 5 4.5 7 3 10m18 0c-1.5-3-5-5-9-5m9 5a9 9 0 0 1-18 0"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Our Vision</h3>
                    <p>To be the most trusted agritech brand that creates prosperity for farmers and partners across India.</p>
                  </div>
                </div>
                <div className="about-mvp-item">
                  <div className="about-mvp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h8"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Our Purpose</h3>
                    <p>To make advanced agricultural technologies accessible and profitable for everyone.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right image */}
            <div className="about-hero-img-wrap">
              <img
                src="/assets/about-hero.png"
                alt="IGO agritech farmers collaborating in greenhouse"
                className="about-hero-img"
              />
              {/* Stats overlay bar */}
              <div className="about-hero-stats-bar">
                <div className="about-hero-stat-item about-hero-stat-first">
                  <div className="about-hero-stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 0 0-7.071 17.071M12 2a10 10 0 0 1 7.071 17.071M2.929 19.071A10 10 0 0 0 12 22a10 10 0 0 0 9.071-2.929"/>
                    </svg>
                  </div>
                  <span>Building India's<br /><b>Largest Agritech<br />Franchise Network</b></span>
                </div>
                <div className="about-hero-stat-item">
                  <b><Counter target={26} suffix="+" /></b>
                  <span>Business<br />Verticals</span>
                </div>
                <div className="about-hero-stat-item">
                  <b><Counter target={100} suffix="+" /></b>
                  <span>Franchise<br />Partners</span>
                </div>
                <div className="about-hero-stat-item">
                  <b><Counter target={150} suffix="+" /></b>
                  <span>Cities<br />Presence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section className="about-story-sec sec-alt">
        <div className="wrap">
          <div className="about-story-grid">
            {/* Left image collage */}
            <div className="about-story-imgs">
              <div className="about-story-img-grid">
                <div className="about-story-img-main">
                  <img src="/assets/about-hero.png" alt="IGO Agritech building" />
                </div>
                <div className="about-story-img-sub">
                  <img src="/assets/about-hero.png" alt="IGO green farm" />
                </div>
                <div className="about-story-img-sub">
                  <img src="/assets/about-hero.png" alt="IGO team training" />
                </div>
              </div>
              <div className="about-story-overlay-card">
                <div className="about-story-overlay-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <strong>From Vision to Impact</strong>
                  <p>A journey of passion, innovation and unwavering commitment towards agriculture.</p>
                </div>
              </div>
            </div>

            {/* Right text */}
            <Reveal className="about-story-content">
              <span className="about-eyebrow">OUR STORY</span>
              <h2 className="about-story-h2">
                Growing Together,<br />
                <span className="about-h1-green">Succeeding Together</span>
              </h2>
              <p>
                IGO Agritech Farms was born out of a simple belief – that agriculture can be modern, profitable and sustainable. What started as a vision to support farmers with the best technologies has grown into a nationwide movement of agripreneurs.
              </p>
              <p>
                Today, with 26+ business verticals and 100+ franchise partners across India, we continue to innovate, train and support thousands of individuals in building successful agribusinesses.
              </p>
              <div className="about-story-signature">IGO Agritech Farms</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== IGO AT A GLANCE ========== */}
      <section className="about-glance-sec">
        <div className="wrap">
          <Reveal>
            <h2 className="about-glance-title">IGO AT A GLANCE</h2>
          </Reveal>
          <div className="about-glance-grid">
            {STATS_GLANCE.map((stat, i) => (
              <Reveal key={i} className="about-glance-card">
                <div className="about-glance-icon">
                  {i === 0 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
                  {i === 1 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                  {i === 2 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                  {i === 3 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10v6M2 10l10-7 10 7-10 7-10-7z"/></svg>}
                  {i === 4 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>}
                  {i === 5 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>}
                </div>
                <div className="about-glance-value">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <h4 className="about-glance-label">{stat.label}</h4>
                <p className="about-glance-desc">{stat.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="about-values-sec sec-alt">
        <div className="wrap">
          <Reveal>
            <h2 className="about-values-title">Our Core Values</h2>
          </Reveal>
          <div className="about-values-grid">
            {CORE_VALUES.map((val, i) => (
              <Reveal key={i} className="about-value-card">
                <div className="about-value-icon">{val.icon}</div>
                <h4 className="about-value-label">{val.title}</h4>
                <p className="about-value-desc">{val.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="about-cta-sec">
        <div className="wrap">
          <div className="about-cta-inner">
            <div className="about-cta-text">
              <h2>Be a Part of the IGO Family</h2>
              <p>Let's grow together and create a better future for agriculture.</p>
            </div>
            <div className="about-cta-buttons">
              <Link to="/apply" className="btn about-cta-btn-primary">
                Become a Partner →
              </Link>
              <Link to="/contact" className="btn about-cta-btn-outline">
                Talk to Our Expert ☎
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
