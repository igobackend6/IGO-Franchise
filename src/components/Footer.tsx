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
              <li><a href="tel:+917397789803">+91 73977 89803</a></li>
              <li><a href="tel:+917397789804">+91 73977 89804</a></li>
              <li><a href="tel:+917397789805">+91 73977 89805</a></li>
              <li><a href="mailto:franchise@igogroup.in">franchise@igogroup.in</a></li>
              <li><a href="https://maps.google.com/?q=No.17,+Kovalan+Street,+2nd+Main+Road,+Uthandi+Kanathur,+Chennai+600119" target="_blank" rel="noreferrer"><span>No.17, Kovalan Street, 2nd Main Road,<br/>Uthandi Kanathur, Chennai – 600119.</span></a></li>
            </ul>
          </div>
        </div>

          <div className="foot-bottom">
            <span>© 2026 IGO Group. All rights reserved.</span>
            <div className="foot-social">
              <a href="https://facebook.com/igogroup" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://instagram.com/igogroup" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
              <a href="https://linkedin.com/company/igogroup" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            </div>
          </div>
      </div>
    </footer>
  );
}
