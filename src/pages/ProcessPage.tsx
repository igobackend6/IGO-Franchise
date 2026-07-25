import ProcessLoop from "../components/ProcessLoop";

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">The Franchise Journey</span>
          <h1>
            Built as a loop, not a ladder — because growth here never stops.
          </h1>
          <p>
            Just like the infinity mark in our logo, every franchisee's
            journey feeds back into the next stage of expansion.
          </p>
        </div>
      </section>

      <ProcessLoop />
    </>
  );
}
