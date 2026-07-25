import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import WhyUsGrid from "../components/WhyUsGrid";

import VerticalsGrid from "../components/VerticalsGrid";
import ProcessLoop from "../components/ProcessLoop";
import { TESTIMONIALS, HERO_VIDEO_SRC } from "../data/franchiseData";

const MARQUEE_ITEMS = [
  "IGO Agri Mart",
  "Palm Cafe",
  "IGO Nursery",
  "Farmers Factory",
  "IGO CropCare",
  "IGO Organic Pharmacy",
  "IGO Exports & Imports",
  "Valluvam Consultancy",
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero" id="top">
        <video className="hero-bg-video" autoPlay loop muted playsInline>
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow on-dark">IGO Group · Franchise Programme</span>
            <h1>
              Grow a business that <em>grows the earth.</em>
            </h1>
            <p className="lead">
              Partner with a 27-brand agricultural ecosystem built in Chennai
              and trusted by 50,000+ farmers. Own a unit across retail,
              farm-to-table, nursery or agri-input verticals — with the full
              IGO playbook behind you.
            </p>
            <div className="hero-ctas">
              <Link to="/apply" className="btn btn-gold">
                Start Your Application
              </Link>
              <Link to="/opportunities" className="btn btn-outline">
                Explore Verticals
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <b><Counter target={27} /></b>
                <span>Brand Verticals</span>
              </div>
              <div>
                <b><Counter target={100} suffix="+" /></b>
                <span>Cities Covered</span>
              </div>
              <div>
                <b><Counter target={50} suffix="K+" /></b>
                <span>Farmers Served</span>
              </div>
              <div>
                <b><Counter target={6} /></b>
                <span>Years of Growth</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="loop-video-card">
              {/* Background video */}
              <video
                className="loop-video-bg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/assets/loop-bg.mp4" type="video/mp4" />
              </video>
              {/* Soft dark overlay */}
              <div className="loop-video-overlay" />
              {/* SVG loop animation on top */}
              <div className="loop-video-content">
                <svg viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="loopGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#7FC24B" />
                      <stop offset="1" stopColor="#7FC4F5" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M60,140 C60,90 130,90 150,140 C170,190 240,190 240,140 C240,90 170,90 150,140 C130,190 60,190 60,140 Z"
                    stroke="url(#loopGrad)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle className="pulse-dot" r="5" />
                  <circle cx="60" cy="140" r="4" fill="#7FC24B" />
                  <circle cx="150" cy="90" r="4" fill="#a7d98e" />
                  <circle cx="240" cy="140" r="4" fill="#7FC4F5" />
                  <circle cx="150" cy="190" r="4" fill="#5aa8dd" />
                </svg>
                <div className="cap">
                  <span>Apply → Train → Launch</span>
                  <span>Grow → Multiply ↻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="marquee-wrap">
        <div className="marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ================= WHY US ================= */}
      <section className="sec sec-alt" id="why">
        <div className="wrap">
          <WhyUsGrid />
        </div>
      </section>


      {/* ================= 26 VERTICALS ================= */}
      <VerticalsGrid />

      {/* ================= PROCESS LOOP ================= */}
      <ProcessLoop />

      {/* ================= TESTIMONIALS TEASER ================= */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Franchise Partner Stories</span>
            <h2>What it's like running an IGO outlet.</h2>
          </Reveal>
          <div className="test-grid">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name} className="test-card">
                <div className="test-stars">★★★★★</div>
                <p className="quote">"{t.quote}"</p>
                <div className="test-who">
                  <div className="test-avatar">{t.initials}</div>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
