import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { 
  ClipboardCheck, FileSignature, HandCoins, ShoppingCart, 
  ShieldCheck, Sprout, UserCog, ShoppingBag, TrendingUp, Headset,
  Leaf, User, ArrowRight, Handshake
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="hiw-sec" id="how-it-works">
      <div className="wrap">
        <Reveal>
          {/* HEADER */}
          <div className="hiw-header">
            <h2 className="hiw-title">
              <Leaf size={28} /> HOW IT WORKS <Leaf size={28} style={{ transform: 'scaleX(-1)' }} />
            </h2>
            <p className="hiw-subtitle">Become an Investment Partner in 5 Simple Steps</p>
            <p className="hiw-desc">
              Our transparent 5-step process makes it easy for you to invest in agriculture<br/>
              and earn eligible returns with complete peace of mind.
            </p>
          </div>

          {/* 5 STEPS */}
          <div className="hiw-steps-row">
            {/* Step 1 */}
            <div className="hiw-step-card">
              <div className="hiw-step-num">1</div>
              <div className="hiw-step-icon">
                <ClipboardCheck size={42} strokeWidth={1.5} />
              </div>
              <h3 className="hiw-step-title">CHOOSE YOUR<br/>INVESTMENT PLAN</h3>
              <p className="hiw-step-desc">
                Select the investment plan that best suits your financial goals and budget.<br/><br/>
                Our team will guide you through the available options.
              </p>
            </div>

            <div className="hiw-arrow" aria-hidden="true"></div>

            {/* Step 2 */}
            <div className="hiw-step-card">
              <div className="hiw-step-num">2</div>
              <div className="hiw-step-icon">
                <FileSignature size={42} strokeWidth={1.5} />
              </div>
              <h3 className="hiw-step-title">SIGN A 5-YEAR<br/>AGREEMENT</h3>
              <p className="hiw-step-desc">
                A legally documented 5-year agreement is signed between you and IGO Agritech,
                outlining all terms, conditions and benefits clearly.
              </p>
            </div>

            <div className="hiw-arrow" aria-hidden="true"></div>

            {/* Step 3 */}
            <div className="hiw-step-card">
              <div className="hiw-step-num">3</div>
              <div className="hiw-step-icon">
                <HandCoins size={42} strokeWidth={1.5} />
              </div>
              <h3 className="hiw-step-title">INVEST YOUR<br/>AMOUNT</h3>
              <p className="hiw-step-desc">
                Invest the selected amount. No land, no farming experience, no management
                is required. We handle everything for you.
              </p>
            </div>

            <div className="hiw-arrow" aria-hidden="true"></div>

            {/* Step 4 */}
            <div className="hiw-step-card">
              <div className="hiw-step-num">4</div>
              <div className="hiw-step-icon">
                <ShoppingCart size={42} strokeWidth={1.5} />
              </div>
              <h3 className="hiw-step-title">MONTHLY PURCHASE<br/>REQUIREMENT</h3>
              <p className="hiw-step-desc">
                Purchase IGO products worth ₹1,000 or more every month to remain
                eligible for the maximum benefits under your plan.
              </p>
            </div>

            <div className="hiw-arrow" aria-hidden="true"></div>

            {/* Step 5 */}
            <div className="hiw-step-card">
              <div className="hiw-step-num">5</div>
              <div className="hiw-step-icon">
                <HandCoins size={42} strokeWidth={1.5} />
              </div>
              <h3 className="hiw-step-title">RECEIVE YOUR<br/>BENEFITS</h3>
              <p className="hiw-step-desc">
                After successfully completing the 5-year agreement and fulfilling all conditions, receive
                your investment along with eligible benefits as per the agreement terms.
              </p>
            </div>
          </div>

          {/* WHY THIS PARTNERSHIP WORKS */}
          <div className="hiw-why-section">
            <h3 className="hiw-why-title">
              <Leaf size={18} /> WHY THIS PARTNERSHIP WORKS <Leaf size={18} style={{ transform: 'scaleX(-1)' }} />
            </h3>
            
            <div className="hiw-why-grid">
              <div className="hiw-why-card">
                <div className="hiw-why-icon"><ShieldCheck size={32} /></div>
                <h4>5-YEAR AGREEMENT</h4>
                <p>Transparent and legally documented partnership for long-term confidence and security.</p>
              </div>
              <div className="hiw-why-card">
                <div className="hiw-why-icon"><Sprout size={32} /></div>
                <h4>NO LAND REQUIRED</h4>
                <p>You don't need to own any agricultural land. We take care of it all.</p>
              </div>
              <div className="hiw-why-card">
                <div className="hiw-why-icon"><UserCog size={32} /></div>
                <h4>PROFESSIONALLY MANAGED</h4>
                <p>Our expert team manages cultivation, operations, and project execution end-to-end.</p>
              </div>
              <div className="hiw-why-card">
                <div className="hiw-why-icon"><ShoppingBag size={32} /></div>
                <h4>MONTHLY PURCHASE</h4>
                <p>Purchase ₹1,000 or more worth of IGO products every month to maximize eligible benefits.</p>
              </div>
              <div className="hiw-why-card">
                <div className="hiw-why-icon"><TrendingUp size={32} /></div>
                <h4>ATTRACTIVE BENEFITS</h4>
                <p>Earn eligible benefits upon successful completion of your 5-year partnership as per the agreement.</p>
              </div>
              <div className="hiw-why-card">
                <div className="hiw-why-icon"><Headset size={32} /></div>
                <h4>TRANSPARENT SUPPORT</h4>
                <p>Clear process, regular updates and dedicated support at every step of your journey.</p>
              </div>
            </div>
          </div>

          {/* IMPORTANT INFORMATION */}
          <div className="hiw-important-section">
            <h3 className="hiw-important-title">IMPORTANT INFORMATION</h3>
            <div className="hiw-important-grid">
              <div className="hiw-important-item">
                <div className="hiw-important-icon"><Leaf size={20} /></div>
                <p>No agricultural land<br/>ownership is required.</p>
              </div>
              <div className="hiw-important-item">
                <div className="hiw-important-icon"><User size={20} /></div>
                <p>No farming experience<br/>is necessary.</p>
              </div>
              <div className="hiw-important-item">
                <div className="hiw-important-icon"><ShoppingCart size={20} /></div>
                <p>Monthly purchase of<br/>₹1,000 or above is<br/>part of the partnership<br/>conditions.</p>
              </div>
              <div className="hiw-important-item">
                <div className="hiw-important-icon"><span style={{ fontSize: '22px', fontWeight: 900 }}>!</span></div>
                <p>Missing the monthly<br/>purchase requirement<br/>may reduce the eligible<br/>benefits as per the<br/>agreement.</p>
              </div>
              <div className="hiw-important-item">
                <div className="hiw-important-icon"><HandCoins size={20} /></div>
                <p>Final settlement is<br/>processed after the<br/>successful completion<br/>of the 5-year agreement,<br/>subject to terms and<br/>conditions.</p>
              </div>
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="hiw-cta-banner">
            <div className="hiw-cta-left">
              <Handshake size={36} />
              <span>Invest in agriculture. Partner with trust. Grow with IGO Agritech.</span>
            </div>
            <div className="hiw-cta-right">
              <Link to="/franchise-models" className="hiw-cta-primary">EXPLORE INVESTMENT PLANS <ArrowRight size={18} /></Link>
              <Link to="/contact" className="hiw-cta-secondary"><Headset size={18} /> TALK TO AN EXPERT</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
