import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { Sprout, Leaf, TrendingUp, Diamond, ShieldCheck, ShoppingCart, FileText, IndianRupee, Headset, Info } from "lucide-react";

/* ── SVG icon helpers ── */
const LeafTitleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
    <path d="M12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const PolyhouseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const HydroponicsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a8 8 0 0 0 8-8c0-3.5-2-6-5-8" /><path d="M12 22a8 8 0 0 1-8-8c0-3.5 2-6 5-8" /><line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

const NurseryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12" /><path d="M5 12C5 7 8 4 12 4c4 0 7 3 7 8" /><path d="M5 12c0 0 2 2 7 2s7-2 7-2" />
  </svg>
);

const StoreIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ConsultancyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const FarmgateIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><circle cx="12" cy="13" r="3" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 6 6l.61-.61a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Data ── */
const FRANCHISE_MODELS = [
  {
    id: "polyhouse",
    image: "/assets/franchise-models/polyhouse.jpg",
    icon: <PolyhouseIcon />,
    title: "Polyhouse\nFranchise",
    tagline: "High-tech protected farming for higher yield & income.",
    features: [
      "Low maintenance",
      "High productivity",
      "Year-round cultivation",
      "Expert guidance",
    ],
    investment: "₹10 Lakhs Onwards",
  },
  {
    id: "hydroponics",
    image: "/assets/franchise-models/hydroponics.png",
    icon: <HydroponicsIcon />,
    title: "Hydroponics\nFranchise",
    tagline: "Soilless farming with advanced technology & higher returns.",
    features: [
      "90% less water usage",
      "Faster growth",
      "Pesticide free",
      "Smart farming system",
    ],
    investment: "₹8 Lakhs Onwards",
  },
  {
    id: "nursery",
    image: "/assets/franchise-models/nursery.jpg",
    icon: <NurseryIcon />,
    title: "Nursery\nFranchise",
    tagline: "Start your profitable nursery business with our support.",
    features: [
      "Wide range of plants",
      "Quality saplings",
      "High demand",
      "Marketing support",
    ],
    investment: "₹5 Lakhs Onwards",
  },
  {
    id: "agri-input",
    image: "/assets/franchise-models/agri-input-store.jpg",
    icon: <StoreIcon />,
    title: "Agri Input Store\nFranchise",
    tagline: "Retail business of seeds, fertilizers & agri inputs.",
    features: [
      "High demand products",
      "Good margins",
      "Complete support",
      "Easy to operate",
    ],
    investment: "₹6 Lakhs Onwards",
  },
  {
    id: "consultancy",
    image: "/assets/franchise-models/agri-consultancy.png",
    icon: <ConsultancyIcon />,
    title: "Agri Consultancy\nFranchise",
    tagline: "Provide expert agritech consultancy in your region.",
    features: [
      "High profit potential",
      "Expert training",
      "Project support",
      "Brand credibility",
    ],
    investment: "₹3 Lakhs Onwards",
  },
  {
    id: "farmgate",
    image: "/assets/franchise-models/farmgate-agrimart.png",
    icon: <FarmgateIcon />,
    title: "Farmgate /\nAgri Mart Franchise",
    tagline: "Own your agri retail store with IGO's proven model.",
    features: [
      "Fresh farm produce",
      "Daily footfall",
      "Strong brand support",
      "Higher profitability",
    ],
    investment: "₹7 Lakhs Onwards",
  },
];

export default function FranchiseModelsPage() {
  return (
    <div className="fm-page">
      {/* ========== HEADER ========== */}
      <section className="fm-header" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.85)), url('/assets/investment-hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <h1 className="fm-main-title">
              Investment <span className="fm-title-green">Plans</span>
            </h1>
            <p className="fm-main-subtitle">
              Choose the right agritech business model and start your successful journey with IGO.
            </p>
            <div className="fm-title-line" />
          </Reveal>
        </div>
      </section>

      {/* ========== INVESTMENT PLANS ========== */}
      <section className="inv-sec">
        <div className="wrap">
          <Reveal>
            <div className="inv-header">
              <h2 className="inv-title">
                <Leaf size={28} /> INVESTMENT PLANS <Leaf size={28} style={{transform: 'scaleX(-1)'}} />
              </h2>
              <p className="inv-subtitle">Choose the Right Plan for Your Agricultural Investment</p>
              <p className="inv-desc">
                IGO Agritech offers flexible investment plans designed to suit different financial goals.<br/>
                All plans come with a <b>5-Year Agreement</b> and a monthly purchase requirement to stay eligible<br/>
                for maximum benefits.
              </p>
            </div>

            <div className="inv-cards">
              {/* Silver Plan */}
              <div className="inv-card silver">
                <div className="inv-icon-wrap">
                  <Sprout size={28} />
                </div>
                <div className="inv-card-name">Silver Plan</div>
                <div className="inv-card-tag">A Smart Start for a<br/>Better Tomorrow</div>
                
                <div className="inv-card-list">
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><Leaf size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Investment Amount</h4>
                      <p>₹1,00,000 &ndash; ₹2,00,000</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><FileText size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Agreement Period</h4>
                      <p>5 Years</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><ShoppingCart size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Monthly Purchase</h4>
                      <p>₹1,000 or more</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><IndianRupee size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Eligible Returns</h4>
                      <p>As per the agreement terms<br/>and conditions</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><FileText size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Highlights</h4>
                      <p>Ideal for first-time investors<br/>and long-term growth</p>
                    </div>
                  </div>
                </div>
                <button className="inv-card-btn">Choose Silver Plan</button>
              </div>

              {/* Gold Plan */}
              <div className="inv-card gold">
                <div className="inv-icon-wrap">
                  <Leaf size={28} />
                </div>
                <div className="inv-card-name">Gold Plan</div>
                <div className="inv-card-tag">Grow More, Earn More<br/>&nbsp;</div>
                
                <div className="inv-card-list">
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><Leaf size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Investment Amount</h4>
                      <p>₹2,00,001 &ndash; ₹5,00,000</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><FileText size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Agreement Period</h4>
                      <p>5 Years</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><ShoppingCart size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Monthly Purchase</h4>
                      <p>₹1,000 or more</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><IndianRupee size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Eligible Returns</h4>
                      <p>As per the agreement terms<br/>and conditions</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><FileText size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Highlights</h4>
                      <p>Balanced plan for steady<br/>growth and better benefits</p>
                    </div>
                  </div>
                </div>
                <button className="inv-card-btn">Choose Gold Plan</button>
              </div>

              {/* Platinum Plan */}
              <div className="inv-card platinum">
                <div className="inv-icon-wrap">
                  <TrendingUp size={28} />
                </div>
                <div className="inv-card-name">Platinum Plan</div>
                <div className="inv-card-tag">Invest More, Achieve More<br/>&nbsp;</div>
                
                <div className="inv-card-list">
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><Leaf size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Investment Amount</h4>
                      <p>₹5,00,001 &ndash; ₹10,00,000</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><FileText size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Agreement Period</h4>
                      <p>5 Years</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><ShoppingCart size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Monthly Purchase</h4>
                      <p>₹1,000 or more</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><IndianRupee size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Eligible Returns</h4>
                      <p>As per the agreement terms<br/>and conditions</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><FileText size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Highlights</h4>
                      <p>Higher investment with<br/>greater potential returns</p>
                    </div>
                  </div>
                </div>
                <button className="inv-card-btn">Choose Platinum Plan</button>
              </div>

              {/* Diamond Plan */}
              <div className="inv-card diamond">
                <div className="inv-icon-wrap">
                  <Diamond size={28} />
                </div>
                <div className="inv-card-name">Diamond Plan</div>
                <div className="inv-card-tag">Maximum Investment,<br/>Maximum Potential</div>
                
                <div className="inv-card-list">
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><Leaf size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Investment Amount</h4>
                      <p>₹10,00,001 and above</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><FileText size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Agreement Period</h4>
                      <p>5 Years</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><ShoppingCart size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Monthly Purchase</h4>
                      <p>₹1,000 or more</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><IndianRupee size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Eligible Returns</h4>
                      <p>As per the agreement terms<br/>and conditions</p>
                    </div>
                  </div>
                  <div className="inv-list-item">
                    <div className="inv-list-icon"><FileText size={18} /></div>
                    <div className="inv-list-content">
                      <h4>Highlights</h4>
                      <p>Best value for maximum<br/>long-term benefits</p>
                    </div>
                  </div>
                </div>
                <button className="inv-card-btn">Choose Diamond Plan</button>
              </div>
            </div>

            <div className="inv-features">
              <div className="inv-feature">
                <div className="inv-feat-icon"><ShieldCheck size={22} /></div>
                <div className="inv-feat-text">
                  <h5>5-Year Agreement</h5>
                  <p>All plans are valid for<br/>5 years from the date<br/>of agreement.</p>
                </div>
              </div>
              <div className="inv-feature">
                <div className="inv-feat-icon"><ShoppingCart size={22} /></div>
                <div className="inv-feat-text">
                  <h5>Monthly Purchase</h5>
                  <p>Purchase IGO products<br/>worth ₹1,000 or more<br/>every month.</p>
                </div>
              </div>
              <div className="inv-feature">
                <div className="inv-feat-icon"><FileText size={22} /></div>
                <div className="inv-feat-text">
                  <h5>Terms & Conditions</h5>
                  <p>All returns and benefits<br/>are as per the agreement<br/>terms and conditions.</p>
                </div>
              </div>
              <div className="inv-feature">
                <div className="inv-feat-icon"><IndianRupee size={22} /></div>
                <div className="inv-feat-text">
                  <h5>Transparent Process</h5>
                  <p>Clear terms, no hidden<br/>charges and complete<br/>transparency.</p>
                </div>
              </div>
              <div className="inv-feature">
                <div className="inv-feat-icon"><Headset size={22} /></div>
                <div className="inv-feat-text">
                  <h5>Dedicated Support</h5>
                  <p>Our team is always here<br/>to assist you at every<br/>step of your journey.</p>
                </div>
              </div>
            </div>

            <div className="inv-note">
              <div className="inv-note-icon">i</div>
              <div><b>Note:</b> Missing monthly purchase may reduce the eligible returns as per agreement terms.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== FRANCHISE CARDS GRID ========== */}
      <section className="fm-cards-sec">
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 className="fm-main-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '10px' }}>
                Franchise <span className="fm-title-green">Models</span>
              </h2>
            </div>
          </Reveal>
          <div className="fm-cards-grid">
            {FRANCHISE_MODELS.map((model) => (
              <Reveal key={model.id} className="fm-card">
                {/* Left: image */}
                <div className="fm-card-img-wrap">
                  <img
                    src={model.image}
                    alt={model.title.replace("\n", " ")}
                    className="fm-card-img"
                  />
                </div>

                {/* Right: content */}
                <div className="fm-card-body">
                  <div className="fm-card-top">
                    <div className="fm-card-icon">{model.icon}</div>
                    <h2 className="fm-card-title">
                      {model.title.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < model.title.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </h2>
                  </div>
                  <p className="fm-card-tagline">{model.tagline}</p>
                  <ul className="fm-card-features">
                    {model.features.map((f) => (
                      <li key={f}>
                        <span className="fm-check"><CheckIcon /></span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Footer: investment + learn more */}
                  <div className="fm-card-footer">
                    <div className="fm-investment">
                      <span className="fm-investment-icon"><HomeIcon /></span>
                      <div>
                        <span className="fm-investment-label">Investment</span>
                        <strong className="fm-investment-value">{model.investment}</strong>
                      </div>
                    </div>
                    <Link to="/apply" className="fm-learn-btn">
                      Learn More <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CUSTOM CTA BANNER ========== */}
      <section className="fm-cta-sec">
        <div className="wrap">
          <div className="fm-cta-inner">
            {/* Left: icon + text */}
            <div className="fm-cta-left">
              <div className="fm-cta-icon">
                <HandshakeIcon />
              </div>
              <div>
                <h3 className="fm-cta-heading">Don't see the model you're looking for?</h3>
                <p className="fm-cta-sub">
                  We also offer custom franchise opportunities tailored to your location and interest.
                </p>
              </div>
            </div>

            {/* Center: CTA button */}
            <Link to="/apply" className="fm-cta-btn">
              Explore Custom Opportunities <ArrowRightIcon />
            </Link>

            {/* Right: phone */}
            <div className="fm-cta-phone">
              <a href="tel:+917397789803" style={{ display: 'contents', color: 'inherit', textDecoration: 'none' }}>
                <div className="fm-cta-phone-icon"><PhoneIcon /></div>
                <div>
                  <span className="fm-cta-phone-label">Talk to Our Expert</span>
                  <strong className="fm-cta-phone-num">+91 73977 89803</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
