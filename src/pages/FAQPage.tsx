import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { FAQS } from "../data/franchiseData";

const CATEGORIES = ["All", "Investment", "Operations", "Support", "Process"];

const EXTENDED_FAQS = [
  ...FAQS,
  {
    q: "What locations does IGO currently operate franchises in?",
    a: "IGO has franchise partners in 150+ cities across Tamil Nadu, Karnataka, Maharashtra, Andhra Pradesh, and Telangana. We're actively expanding Pan India and welcome inquiries from any city or town.",
  },
  {
    q: "Is there a royalty fee after I launch?",
    a: "Yes, there is a nominal royalty/service fee that covers ongoing field manager support, brand updates, marketing materials, and technology tools. The exact percentage varies by tier and is clearly stated in your franchise agreement.",
  },
  {
    q: "What kind of marketing support do I get?",
    a: "You receive a launch marketing package including local social media content, branded signage, opening event support, and access to IGO's centralized digital marketing campaigns. Growth and Multi-Unit tier partners get priority placement in our digital channels.",
  },
  {
    q: "Can I convert an existing agri business into an IGO franchise?",
    a: "Yes, subject to a site assessment and alignment with IGO's operational standards. We have a specific conversion pathway for existing agri retail outlets, nurseries, and input stores.",
  },
  {
    q: "Does IGO provide the raw materials and inventory?",
    a: "Yes. As an IGO franchisee you benefit from our centralized supply chain — seeds, fertilizers, plants, and produce are supplied from IGO's own farms and manufacturing units at preferential rates.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="faq-page">
      {/* ========== HERO ========== */}
      <section className="faq-hero">
        <div className="wrap">
          <Reveal className="faq-hero-content">
            <span className="faq-eyebrow">FREQUENTLY ASKED</span>
            <h1 className="faq-hero-title">
              Answers Before <span className="faq-title-green">You Apply</span>
            </h1>
            <p className="faq-hero-sub">
              Everything you need to know about joining the IGO Franchise network — from investment to launch and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="faq-body-sec">
        <div className="wrap">
          <div className="faq-layout">
            {/* Left: accordion */}
            <div className="faq-accordion-col">
              {/* Category pills */}
              <div className="faq-cats">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`faq-cat-btn ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <Reveal>
                <div className="faq-list">
                  {EXTENDED_FAQS.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                      <div className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
                        <button
                          className="faq-q"
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          aria-expanded={isOpen}
                        >
                          <span>{item.q}</span>
                          <span className={`faq-chevron ${isOpen ? "open" : ""}`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </button>
                        <div className="faq-a">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right: contact card */}
            <div className="faq-sidebar">
              <Reveal className="faq-sidebar-card">
                <div className="faq-sidebar-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3>Still have questions?</h3>
                <p>Our franchise advisors are available Monday–Saturday, 10am–7pm.</p>
                <div className="faq-sidebar-contact">
                  <a href="tel:+917397789803" className="faq-contact-item">
                    <span className="faq-contact-icon">📞</span>
                    <div>
                      <span className="faq-contact-label">Call Us</span>
                      <strong>+91 73977 89803</strong>
                    </div>
                  </a>
                  <a href="mailto:franchise@igoagritech.com" className="faq-contact-item">
                    <span className="faq-contact-icon">✉️</span>
                    <div>
                      <span className="faq-contact-label">Email Us</span>
                      <strong>franchise@igoagritech.com</strong>
                    </div>
                  </a>
                  <a href="https://wa.me/917397789803" className="faq-contact-item">
                    <span className="faq-contact-icon">💬</span>
                    <div>
                      <span className="faq-contact-label">WhatsApp</span>
                      <strong>Chat with an Advisor</strong>
                    </div>
                  </a>
                </div>
                <Link to="/apply" className="faq-sidebar-cta">
                  Apply Now →
                </Link>
              </Reveal>

              {/* Quick fact card */}
              <Reveal className="faq-facts-card">
                <h4>Quick Facts</h4>
                <ul className="faq-facts-list">
                  <li><span className="faq-fact-dot" />Min. investment from ₹3 Lakhs</li>
                  <li><span className="faq-fact-dot" />Launch in 45–90 days</li>
                  <li><span className="faq-fact-dot" />150+ cities covered</li>
                  <li><span className="faq-fact-dot" />100+ active partners</li>
                  <li><span className="faq-fact-dot" />No prior experience needed</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="faq-cta-sec">
        <div className="wrap">
          <Reveal className="faq-cta-inner">
            <h2>Ready to take the next step?</h2>
            <p>Submit your application and our team will reach out within 24 hours.</p>
            <Link to="/apply" className="btn faq-cta-btn">
              Start Your Application →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
