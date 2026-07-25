import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "../components/Reveal";
import { FAQS } from "../data/franchiseData";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Frequently Asked</span>
          <h1>Answers before you apply.</h1>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <Reveal className="faq-list">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                  <button
                    className="faq-q"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <Plus size={18} />
                  </button>
                  <div className="faq-a">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>
    </>
  );
}
