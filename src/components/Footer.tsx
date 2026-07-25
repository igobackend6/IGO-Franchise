import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <img src={logo} alt="IGO Franchise" style={{ height: 40 }} />
              <div className="brand-text">
                <b>IGO Franchise</b>
              </div>
            </div>
            <p>
              Part of the IGO Group — a sovereign agricultural ecosystem
              across Engineering, Production, Trade and Consumer Lifestyle,
              headquartered in Chennai, Tamil Nadu.
            </p>
          </div>

          <div className="foot-col">
            <h4>Verticals</h4>
            <ul>
              <li><Link to="/opportunities">IGO Agri Mart</Link></li>
              <li><Link to="/opportunities">Palm Cafe</Link></li>
              <li><Link to="/opportunities">IGO Nursery</Link></li>
              <li><Link to="/opportunities">Farmers Factory</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Franchise</h4>
            <ul>
              <li><Link to="/why-igo">Why IGO</Link></li>
              <li><Link to="/process">How It Works</Link></li>
              <li><Link to="/investment">Investment</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+917428208822">+91 74282 08822</a></li>
              <li><a href="mailto:franchise@igogroup.in">franchise@igogroup.in</a></li>
              <li><span>Chennai, Tamil Nadu, India</span></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 IGO Group. All rights reserved.</span>
          <div className="foot-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
