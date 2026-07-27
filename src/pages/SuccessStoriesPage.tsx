import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

const STORIES = [
  {
    name: "Muthu Selvam",
    location: "Salem, Tamil Nadu",
    vertical: "IGO Agri Mart",
    initials: "MS",
    gradient: "linear-gradient(135deg,#2d7a3a,#4f9e45)",
    investment: "₹14 Lakhs",
    roi: "28% ROI",
    months: "16 Months",
    quote:
      "The training before launch made the biggest difference. By month two, our team already knew the product range better than most competitors nearby. IGO's support system is unlike anything I've seen in the market.",
    highlight: "Revenue doubled within the first year of operations.",
    tags: ["Retail", "Agri Inputs", "Salem"],
  },
  {
    name: "Kavitha Ramesh",
    location: "Trichy, Tamil Nadu",
    vertical: "Farmers Factory Outlet",
    initials: "KR",
    gradient: "linear-gradient(135deg,#1668b8,#1e88e5)",
    investment: "₹18 Lakhs",
    roi: "32% ROI",
    months: "18 Months",
    quote:
      "Having a field manager check in every month kept us accountable in the early days. That support is the real difference from running it alone. The fresh produce supply chain is flawlessly managed.",
    highlight: "Serving 200+ households daily with farm-fresh produce.",
    tags: ["Farm-to-Table", "Retail", "Trichy"],
  },
  {
    name: "Vignesh Prakash",
    location: "Coimbatore, Tamil Nadu",
    vertical: "IGO Nursery",
    initials: "VP",
    gradient: "linear-gradient(135deg,#b8960c,#c9992e)",
    investment: "₹10 Lakhs",
    roi: "35% ROI",
    months: "12 Months",
    quote:
      "The nursery's buy-back arrangement gave us confidence to stock more variety than we would have on our own. Sales grew steadily through the season. This is truly a sustainable business model.",
    highlight: "Expanded to a second location within 14 months.",
    tags: ["Plant Propagation", "Nursery", "Coimbatore"],
  },
  {
    name: "Rajesh Kumar",
    location: "Chennai, Tamil Nadu",
    vertical: "Polyhouse Franchise",
    initials: "RK",
    gradient: "linear-gradient(135deg,#2d7a3a,#7fc24b)",
    investment: "₹12 Lakhs",
    roi: "40% ROI",
    months: "14 Months",
    quote:
      "Starting a polyhouse franchise was intimidating at first, but IGO's expert guidance made every step clear. The year-round cultivation ability keeps my income steady regardless of season.",
    highlight: "Produces 2 tonnes of vegetables monthly for local markets.",
    tags: ["Polyhouse", "Protected Farming", "Chennai"],
  },
  {
    name: "Priya Subramanian",
    location: "Madurai, Tamil Nadu",
    vertical: "Agri Consultancy",
    initials: "PS",
    gradient: "linear-gradient(135deg,#1b4a2c,#3d8a3d)",
    investment: "₹4 Lakhs",
    roi: "50% ROI",
    months: "6 Months",
    quote:
      "With a minimal investment and IGO's brand behind me, I now consult over 50 farmers every month. The brand credibility opened doors that would have taken years to open independently.",
    highlight: "50+ active farmer clients, growing by 10 per month.",
    tags: ["Consultancy", "Low Investment", "Madurai"],
  },
  {
    name: "Arjun Narayanan",
    location: "Pune, Maharashtra",
    vertical: "Hydroponics Franchise",
    initials: "AN",
    gradient: "linear-gradient(135deg,#1668b8,#7fc4f5)",
    investment: "₹9 Lakhs",
    roi: "38% ROI",
    months: "15 Months",
    quote:
      "The smart farming system IGO provided is genuinely cutting-edge. 90% less water usage means my costs stay low while my premium produce commands premium prices in the local markets.",
    highlight: "Supplying to 3 premium restaurants and 1 supermarket.",
    tags: ["Hydroponics", "Smart Farming", "Pune"],
  },
];

const STATS = [
  { value: "100+", label: "Active Partners", icon: "👥" },
  { value: "150+", label: "Cities Covered", icon: "📍" },
  { value: "₹50Cr+", label: "Partner Revenue", icon: "💰" },
  { value: "98%", label: "Partner Satisfaction", icon: "⭐" },
];

export default function SuccessStoriesPage() {
  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="ss-hero">
        <div className="wrap">
          <Reveal className="ss-hero-content">
            <span className="ss-eyebrow">PARTNER STORIES</span>
            <h1 className="ss-hero-title">
              Real People. <span className="ss-title-green">Real Growth.</span>
            </h1>
            <p className="ss-hero-sub">
              Discover how IGO franchise partners across India are building profitable agribusinesses and transforming their communities.
            </p>
          </Reveal>

          {/* Stats strip */}
          <Reveal className="ss-stats-strip">
            {STATS.map((s) => (
              <div key={s.label} className="ss-stat-item">
                <span className="ss-stat-icon">{s.icon}</span>
                <strong className="ss-stat-value">{s.value}</strong>
                <span className="ss-stat-label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ========== STORIES GRID ========== */}
      <section className="ss-grid-sec">
        <div className="wrap">
          <div className="ss-grid">
            {STORIES.map((story) => (
              <Reveal key={story.name} className="ss-card">
                {/* Top header */}
                <div className="ss-card-header">
                  <div className="ss-avatar" style={{ background: story.gradient }}>
                    {story.initials}
                  </div>
                  <div className="ss-card-meta">
                    <h3 className="ss-card-name">{story.name}</h3>
                    <span className="ss-card-location">📍 {story.location}</span>
                    <span className="ss-card-vertical">{story.vertical}</span>
                  </div>
                </div>

                {/* Metrics row */}
                <div className="ss-metrics">
                  <div className="ss-metric">
                    <span className="ss-metric-val">{story.investment}</span>
                    <span className="ss-metric-lbl">Investment</span>
                  </div>
                  <div className="ss-metric-divider" />
                  <div className="ss-metric">
                    <span className="ss-metric-val ss-metric-green">{story.roi}</span>
                    <span className="ss-metric-lbl">Annual ROI</span>
                  </div>
                  <div className="ss-metric-divider" />
                  <div className="ss-metric">
                    <span className="ss-metric-val">{story.months}</span>
                    <span className="ss-metric-lbl">To Breakeven</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="ss-stars">★★★★★</div>

                {/* Quote */}
                <blockquote className="ss-quote">"{story.quote}"</blockquote>

                {/* Highlight pill */}
                <div className="ss-highlight">
                  <span className="ss-highlight-dot">✓</span>
                  {story.highlight}
                </div>

                {/* Tags */}
                <div className="ss-tags">
                  {story.tags.map((tag) => (
                    <span key={tag} className="ss-tag">{tag}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="ss-cta-sec">
        <div className="wrap">
          <Reveal className="ss-cta-inner">
            <div className="ss-cta-text">
              <h2>Ready to Write Your Success Story?</h2>
              <p>Join 100+ IGO franchise partners growing profitable agribusinesses across India.</p>
            </div>
            <div className="ss-cta-buttons">
              <Link to="/apply" className="btn ss-cta-btn-primary">
                Start Your Application →
              </Link>
              <Link to="/contact" className="btn ss-cta-btn-outline">
                Talk to a Partner Expert ☎
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
