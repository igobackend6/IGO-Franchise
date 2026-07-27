import { useState } from "react";
import Reveal from "../components/Reveal";

const CONTACT_DETAILS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72c.128.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 6 6l.61-.61a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Call Us",
    value: "+91 73977 89803",
    sub: "Mon–Sat, 10am–7pm",
    href: "tel:+917397789803",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email Us",
    value: "franchise@igoagritech.com",
    sub: "We reply within 24 hours",
    href: "mailto:franchise@igoagritech.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Head Office",
    value: "No.17, Kovalan Street, 2nd Main Road",
    sub: "Uthandi Kanathur, Chennai – 600119",
    href: "https://maps.google.com/?q=No.17,+Kovalan+Street,+2nd+Main+Road,+Uthandi+Kanathur,+Chennai+600119",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 73977 89803",
    sub: "Quick chat for queries",
    href: "https://wa.me/917397789803",
  },
];

const INQUIRY_TYPES = [
  "Franchise Inquiry",
  "Investment Information",
  "Support / Operations",
  "Partnership / B2B",
  "Media / Press",
  "General Query",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  type: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", city: "", type: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="ct-page">
      {/* ========== HERO ========== */}
      <section className="ct-hero">
        <div className="wrap">
          <Reveal className="ct-hero-content">
            <span className="ct-eyebrow">GET IN TOUCH</span>
            <h1 className="ct-hero-title">
              Let's <span className="ct-title-green">Connect</span>
            </h1>
            <p className="ct-hero-sub">
              Have a question about franchising with IGO? Our team is ready to help you take the first step towards your agribusiness dream.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========== CONTACT CARDS ========== */}
      <section className="ct-info-sec">
        <div className="wrap">
          <div className="ct-info-grid">
            {CONTACT_DETAILS.map((item) => (
              <Reveal key={item.label}>
                <a href={item.href} className="ct-info-card" target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <div className="ct-info-icon">{item.icon}</div>
                  <div>
                    <span className="ct-info-label">{item.label}</span>
                    <strong className="ct-info-value">{item.value}</strong>
                    <span className="ct-info-sub">{item.sub}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FORM + MAP ========== */}
      <section className="ct-main-sec">
        <div className="wrap">
          <div className="ct-main-grid">
            {/* Form */}
            <Reveal className="ct-form-wrap">
              <div className="ct-form-head">
                <h2>Send us a Message</h2>
                <p>Fill in the form and our franchise advisor will reach out within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="ct-success">
                  <div className="ct-success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button className="ct-success-reset" onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", city:"", type:"", message:"" }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ct-form-row">
                    <div className="ct-field">
                      <label htmlFor="ct-name">Full Name *</label>
                      <input id="ct-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="ct-phone">Phone Number *</label>
                      <input id="ct-phone" name="phone" type="tel" placeholder="+91 73977 89803" value={form.phone} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="ct-form-row">
                    <div className="ct-field">
                      <label htmlFor="ct-email">Email Address *</label>
                      <input id="ct-email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="ct-city">Your City *</label>
                      <input id="ct-city" name="city" type="text" placeholder="City, State" value={form.city} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-type">Inquiry Type</label>
                    <select id="ct-type" name="type" value={form.type} onChange={handleChange}>
                      <option value="">Select inquiry type</option>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-message">Your Message *</label>
                    <textarea id="ct-message" name="message" rows={5} placeholder="Tell us about your interest in IGO franchise — your city, budget, and the model you're considering..." value={form.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="ct-submit-btn">
                    Send Message →
                  </button>
                  <p className="ct-form-note">We respect your privacy. Your information is never shared with third parties.</p>
                </form>
              )}
            </Reveal>

            {/* Right info */}
            <div className="ct-sidebar">
              {/* Office hours */}
              <Reveal className="ct-hours-card">
                <h3>Office Hours</h3>
                <div className="ct-hours-list">
                  <div className="ct-hours-row">
                    <span>Monday – Saturday</span>
                    <strong>10:00 AM – 7:00 PM</strong>
                  </div>
                  <div className="ct-hours-row ct-hours-closed">
                    <span>Sunday</span>
                    <strong>Closed</strong>
                  </div>
                </div>
                <div className="ct-hours-note">
                  📞 WhatsApp available Mon-Sat, 10am–7pm
                </div>
              </Reveal>

              {/* Social links */}
              <Reveal className="ct-social-card">
                <h3>Follow IGO</h3>
                <p>Stay updated with our latest franchise opportunities and agri news.</p>
                <div className="ct-social-links">
                  {[
                    { name: "Instagram", icon: "📸", url: "https://instagram.com/igogroup" },
                    { name: "Facebook", icon: "👍", url: "https://facebook.com/igogroup" },
                    { name: "YouTube", icon: "▶️", url: "https://youtube.com/igogroup" },
                    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/company/igogroup" },
                  ].map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="ct-social-item">
                      <span>{s.icon}</span>
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </Reveal>

              {/* Quick apply nudge */}
              <Reveal className="ct-apply-card">
                <div className="ct-apply-icon">🌱</div>
                <h3>Ready to Apply?</h3>
                <p>Skip the form — submit your full franchise application and hear from us faster.</p>
                <a href="/apply" className="ct-apply-btn">
                  Apply Now →
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
