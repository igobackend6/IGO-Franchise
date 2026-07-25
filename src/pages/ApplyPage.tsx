import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired up yet — swap this out for a real API call
    // (e.g. fetch('/api/applications', { method: 'POST', body: ... }))
    setSubmitted(true);
  }

  return (
    <section className="sec" style={{ paddingTop: 150 }}>
      <div className="wrap">
        <Reveal className="apply-sec" as="div">
          <div className="apply-grid">
            <div>
              <span className="eyebrow on-dark">Start Here</span>
              <h2>Tell us about you — we'll take it from there.</h2>
              <p>
                A member of the IGO Franchise team will call you within 2
                working days to walk through fit, city availability and
                investment options.
              </p>
              <ul className="apply-points">
                <li>No obligation, no application fee</li>
                <li>Personalised vertical recommendation</li>
                <li>Clear next steps within 48 hours</li>
              </ul>
            </div>

            <div>
              {!submitted ? (
                <form className="app-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Full Name</label>
                      <input type="text" required placeholder="Your name" />
                    </div>
                    <div className="form-field">
                      <label>Phone Number</label>
                      <input type="tel" required placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label>City</label>
                      <input type="text" required placeholder="e.g. Chennai" />
                    </div>
                    <div className="form-field">
                      <label>Preferred Vertical</label>
                      <select>
                        <option>IGO Agri Mart</option>
                        <option>Palm Cafe</option>
                        <option>IGO Nursery</option>
                        <option>Farmers Factory Outlet</option>
                        <option>IGO CropCare Retail</option>
                        <option>IGO Organic Pharmacy</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row single">
                    <div className="form-field">
                      <label>Investment Capacity</label>
                      <select>
                        <option>Under ₹10 Lakh</option>
                        <option>₹10–20 Lakh</option>
                        <option>₹20–35 Lakh</option>
                        <option>Above ₹35 Lakh</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row single">
                    <div className="form-field">
                      <label>Message (optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us a little about your background or questions"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-gold btn-block">
                    Submit Application
                  </button>
                  <p className="form-note">
                    By submitting, you agree to be contacted by the IGO
                    Franchise team.
                  </p>
                </form>
              ) : (
                <div className="success-msg">
                  <div className="tick">
                    <CheckCircle2 size={26} />
                  </div>
                  <h3>Application received!</h3>
                  <p>
                    Thank you — our franchise team will call you within 2
                    working days.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
