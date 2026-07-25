import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import {
  FileText,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Leaf,
  Users,
  CheckCircle,
  Globe,
} from "lucide-react";
import { PROCESS_STAGES, PROCESS_VALUES } from "../data/franchiseData";

const STAGE_ICONS = [FileText, ShieldCheck, Rocket, TrendingUp];
const STAGE_CLASSES = ["stage-1", "stage-2", "stage-3", "stage-4"];
const VALUE_ICONS = [Leaf, Users, CheckCircle, Globe];

const BG_IMAGE = "/assets/process/ecosystem-bg.jpg";

export default function ProcessLoop() {
  return (
    <section className="sec process-sec" id="process">
      <div className="process-bg-shot">
        <SmartImage src={BG_IMAGE} alt="" className="process-bg-shot-img" />
        {/* Onboard & Train text overlay inside the background image */}
        <div className="process-bg-overlay-text">
          <span className="process-bg-stage-num">02</span>
          <h3 className="process-bg-stage-title">Onboard &amp; Train</h3>
          <p className="process-bg-stage-desc">
            Site visit, agreement, and hands-on operations training to get you
            future-ready.
          </p>
        </div>
      </div>
      <div className="wrap process-wrap">
        <div className="process-top">
          <Reveal className="sec-head">
            <span className="eyebrow on-dark">The Franchise Journey</span>
            <h2>
              Built as a loop, not a ladder —<br />
              because <span>growth</span> here <span>never stops.</span>
            </h2>
            <p>Just like the infinity mark in our logo, every franchisee's journey feeds back into the next stage of expansion.</p>
          </Reveal>

          <Reveal className="process-loop-area" as="div">
            <svg className="svg-loop" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <path className="loop-path-bg" d="M200,200 C200,50 400,50 400,200 C400,350 600,350 600,200 C600,50 400,50 400,200 C400,350 200,350 200,200 Z" />
              <path className="loop-path-leaf" d="M200,200 C200,50 400,50 400,200 C400,350 600,350 600,200 C600,50 400,50 400,200 C400,350 200,350 200,200 Z" />
              <path className="loop-path-dots" d="M200,200 C200,50 400,50 400,200 C400,350 600,350 600,200 C600,50 400,50 400,200 C400,350 200,350 200,200 Z" />
              <path className="loop-path-glow" d="M200,200 C200,50 400,50 400,200 C400,350 600,350 600,200 C600,50 400,50 400,200 C400,350 200,350 200,200 Z" />
            </svg>

            <div className="center-plant">
              <Leaf size={40} />
            </div>

            {PROCESS_STAGES.map((stage, i) => {
              const Icon = STAGE_ICONS[i];
              return (
                <div className={`stage-node ${STAGE_CLASSES[i]}`} key={stage.num}>
                  <span className="num">{stage.num}</span>
                  <div className="stage-icon">
                    <Icon size={26} />
                  </div>
                  <h4>{stage.title}</h4>
                  <p>{stage.text}</p>
                </div>
              );
            })}
          </Reveal>
        </div>

        <Reveal className="process-values" as="div">
          {PROCESS_VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <div className="p-value" key={v.title}>
                <div className="p-value-icon">
                  <Icon size={26} />
                </div>
                <div className="p-value-text">
                  <h5>{v.title}</h5>
                  <p>{v.text}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
