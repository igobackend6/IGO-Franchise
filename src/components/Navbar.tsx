import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import logo from "../assets/logo.jpg";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/franchise-models", label: "Franchise Models" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap">
          <nav className="navbar">
            <Link to="/" className="brand">
              <img src={logo} alt="IGO Franchise logo" />
              <div className="brand-text">
                <b>IGO Franchise</b>
                <span>Sustainable by Nature</span>
              </div>
            </Link>

            <ul className="nav-links">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <Link to="/apply" className="btn btn-gold">
                Apply Now →
              </Link>
              <button
                className="burger"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
              >
                <Menu color="#fff" size={22} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          <div className="close-row">
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X color="#fff" size={26} />
            </button>
          </div>
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/apply"
                className="btn btn-gold"
                style={{ width: "fit-content" }}
                onClick={() => setOpen(false)}
              >
                Apply Now →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
