import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { OPPORTUNITIES } from "../data/franchiseData";

const TABS: { key: "all" | "retail" | "fnb" | "agri"; label: string }[] = [
  { key: "all", label: "All Verticals" },
  { key: "retail", label: "Retail" },
  { key: "fnb", label: "Food & Produce" },
  { key: "agri", label: "Agri-Input" },
];

export default function OpportunitiesPage() {
  const [filter, setFilter] = useState<"all" | "retail" | "fnb" | "agri">("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = OPPORTUNITIES.filter(
    (o) => filter === "all" || o.category === filter
  );

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Franchise Opportunities</span>
          <h1>Pick the vertical that fits your city and your capital.</h1>
          <p>
            Six active IGO Group brands are now open for franchise
            partnership. Tap a card to see what's included.
          </p>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="opp-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`opp-tab ${filter === tab.key ? "active" : ""}`}
                onClick={() => setFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="opp-grid">
            {visible.map((opp) => {
              const isOpen = openId === opp.id;
              return (
                <Reveal
                  key={opp.id}
                  className={`opp-card ${isOpen ? "open" : ""}`}
                  as="div"
                >
                  <div
                    onClick={() => setOpenId(isOpen ? null : opp.id)}
                  >
                    <div className="opp-top">
                      <span className="opp-tag">{opp.categoryLabel}</span>
                      <img
                        src={opp.image}
                        alt={opp.name}
                        className="opp-top-img"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                          if (fb) fb.style.display = "flex";
                        }}
                      />
                      <span className="opp-top-icon-fallback" style={{ display: "none" }}>
                        {opp.icon}
                      </span>
                    </div>
                    <div className="opp-body">
                      <h3>{opp.name}</h3>
                      <p className="desc">{opp.desc}</p>
                      <div className="opp-meta">
                        <div>
                          Investment
                          <b>{opp.investment}</b>
                        </div>
                        <div>
                          Format
                          <b>{opp.format}</b>
                        </div>
                        <div className="opp-more">
                          Details {isOpen ? "▴" : "▾"}
                        </div>
                      </div>
                    </div>
                    <div className="opp-details">
                      <ul>
                        {opp.includes.map((line) => (
                          <li key={line}>
                            <CheckCircle2 size={14} />
                            {line}
                          </li>
                        ))}
                        <li>
                          <CheckCircle2 size={14} />
                          Est. break-even: {opp.breakeven}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
