import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SuccessStoriesPage from "./SuccessStoriesPage";
import { 
  Award, Sprout, Lightbulb, ShieldCheck, 
  CircleDollarSign, Leaf, Handshake, Headset,
  Users, MapPin, Briefcase, Box, Calendar
} from "lucide-react";

const WHY_IGO_CARDS = [
  {
    icon: <Award size={36} />,
    title: "EXPERIENCED TEAM",
    desc: "A team of agricultural experts with years of experience in managing successful projects."
  },
  {
    icon: <Sprout size={36} />,
    title: "END-TO-END SOLUTIONS",
    desc: "From project planning to execution and marketing, we handle everything for you."
  },
  {
    icon: <Lightbulb size={36} />,
    title: "INNOVATIVE TECHNOLOGY",
    desc: "We use modern technology and advanced farming techniques to ensure maximum productivity."
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "TRANSPARENT & TRUSTWORTHY",
    desc: "Clear processes, legal agreements and complete transparency in every step."
  },
  {
    icon: <CircleDollarSign size={36} />,
    title: "ATTRACTIVE OPPORTUNITIES",
    desc: "Structured investment plans designed to deliver long-term growth and value."
  },
  {
    icon: <Leaf size={36} />,
    title: "SUSTAINABLE PRACTICES",
    desc: "We follow eco-friendly and sustainable farming practices for a greener future."
  },
  {
    icon: <Handshake size={36} />,
    title: "STRONG PARTNERSHIP",
    desc: "We believe in building long-term relationships based on trust, commitment and mutual growth."
  },
  {
    icon: <Headset size={36} />,
    title: "DEDICATED SUPPORT",
    desc: "Our dedicated support team is always here to assist you at every step."
  }
];

const STATS = [
  { icon: <Users size={28} />, value: "500+", label: "Happy Investors" },
  { icon: <Sprout size={28} />, value: "100+", label: "Managed Farms" },
  { icon: <Briefcase size={28} />, value: "50+", label: "Agricultural Experts" },
  { icon: <Box size={28} />, value: "1000+", label: "Products Delivered" },
  { icon: <Handshake size={28} />, value: "5+ Years", label: "of Strong Partnerships" }
];

export default function WhyIgoPage() {
  return (
    <div className="fm-page">
      {/* ========== WHY IGO HERO ========== */}
      <section className="why-hero-sec">
        <div className="wrap why-hero-wrap">
          <div className="why-hero-text">
            <Reveal>
              <h1 className="why-hero-title">
                WHY <span>IGO?</span>
              </h1>
              <h2 className="why-hero-subtitle">Your Trusted Partner in Agricultural Growth</h2>
              <p className="why-hero-desc">
                IGO Agritech is committed to revolutionizing agriculture through
                innovation, sustainability, and trust. We provide end-to-end solutions
                and investment opportunities that create value for our partners
                and contribute to a better tomorrow.
              </p>
              <div className="why-hero-line"></div>
            </Reveal>
          </div>
          <div className="why-hero-img-box">
            <Reveal>
              <div className="why-hero-img">
                <img src="/assets/why-igo-hero.jpg" alt="Why IGO Agritech" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== CARDS ========== */}
      <section className="why-cards-sec">
        <div className="wrap">
          <div className="why-cards-grid">
            {WHY_IGO_CARDS.map((card, idx) => (
              <Reveal key={idx} className="why-card">
                <div className="why-card-icon">{card.icon}</div>
                <h3 className="why-card-title">{card.title}</h3>
                <p className="why-card-desc">{card.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS STRIP ========== */}
      <section className="why-stats-sec">
        <div className="wrap">
          <Reveal>
            <div className="why-stats-strip">
              {STATS.map((stat, idx) => (
                <div key={idx} className="why-stat-item">
                  <div className="why-stat-icon">{stat.icon}</div>
                  <div className="why-stat-text">
                    <div className="why-stat-value">{stat.value}</div>
                    <div className="why-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== PARTNER STORIES ========== */}
      <div style={{ paddingTop: '60px' }}>
        <SuccessStoriesPage />
      </div>
    </div>
  );
}
