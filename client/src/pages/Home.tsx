/**
 * SIGNAL LEDGER — Swiss editorial case-study design.
 * Pale paper, near-ink typography, cobalt signal lines, and #C7FF3D only for evidence and action.
 * Maintain asymmetric report-like composition; do not dilute it with generic centered marketing sections.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Copy,
  Database,
  FileText,
  Gauge,
  GitBranch,
  Layers3,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const STACK = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "LangChain",
  "OpenAI API",
  "React",
  "AWS",
];

const METRICS = [
  { value: "12,480", label: "resumes parsed", note: "illustrative target" },
  { value: "18,920", label: "job descriptions indexed", note: "illustrative target" },
  { value: "142 ms", label: "median API latency", note: "illustrative target" },
  { value: "500", label: "concurrent requests", note: "illustrative target" },
];

const FLOW = [
  {
    id: "01",
    title: "Extract",
    text: "Normalize resume and job-description data into durable, queryable career records.",
    icon: FileText,
  },
  {
    id: "02",
    title: "Understand",
    text: "Use embedding-based retrieval and structured LLM workflows to surface meaningful fit signals.",
    icon: BrainCircuit,
  },
  {
    id: "03",
    title: "Recommend",
    text: "Translate evidence into rankable matches, skill gaps, and the next action worth taking.",
    icon: Sparkles,
  },
];

const BULLETS = [
  "Built an AI career intelligence platform that processed 12,480 resumes and indexed 18,920 job descriptions, automating resume parsing, semantic job matching, skill-gap analysis, and personalized recommendations.",
  "Developed FastAPI services with a 142 ms median API latency and sustained 500 concurrent requests in load tests; used PostgreSQL for persistent records and Redis to serve high-frequency reads.",
  "Implemented LangChain and OpenAI structured-output workflows across 1,250 evaluation cases, reaching 89% job-match relevance and a 97.6% structured-output success rate.",
  "Reduced repeated LLM and external API requests by 46% with Redis caching and built an automated test suite covering 84% of backend code.",
  "Deployed the platform on AWS through CI/CD pipelines and maintained a 99.2% successful deployment and health-check rate across tracked runs.",
];

function MetricTile({ value, label, note }: (typeof METRICS)[number]) {
  return (
    <article className="metric-tile group">
      <div className="flex items-center justify-between gap-3">
        <span className="evidence-tag">BENCHMARK / TARGET</span>
        <span className="h-2 w-2 rounded-full bg-[#c7ff3d] shadow-[0_0_0_4px_rgba(199,255,61,0.15)]" />
      </div>
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
      <p className="metric-note">{note}</p>
    </article>
  );
}

function CopyBullet({ text, index }: { text: string; index: number }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="bullet-card">
      <div className="bullet-no">0{index + 1}</div>
      <p>{text}</p>
      <button onClick={copy} className="copy-button" aria-label={`Copy resume bullet ${index + 1}`}>
        {copied ? <Check size={16} /> : <Copy size={16} />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </article>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f4ed] text-[#101520] selection:bg-[#c7ff3d] selection:text-[#101520]">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Career Signal home">
          <img src="/manus-storage/signal-ledger-logo_0ac8fa0a.png" alt="Career Signal mark" className="brand-mark" />
          <span className="brand-name">
            CAREER <i /> SIGNAL
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          <a href="#system">System</a>
          <a href="#evidence">Evidence</a>
          <a href="#bullets">Resume bullets</a>
        </nav>
        <a href="#bullets" className="header-cta">
          Inspect the work <ArrowUpRight size={15} />
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid" />
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span /> AI CAREER INTELLIGENCE / CASE STUDY</p>
              <h1 id="hero-title">Make career decisions with <em>signal,</em> not noise.</h1>
              <p className="hero-summary">
                An evidence-led platform for parsing resumes, understanding job fit, and converting fragmented labor-market data into high-confidence next steps.
              </p>
              <div className="hero-actions">
                <a href="#system" className="primary-action">Explore the system <ArrowDownRight size={18} /></a>
                <a href="#evidence" className="secondary-action">See benchmark targets <ArrowDownRight size={18} /></a>
              </div>
            </div>

            <aside className="hero-proof" aria-label="Platform benchmark target">
              <div className="proof-heading">
                <span className="evidence-tag">SYSTEM / ONLINE</span>
                <span className="proof-dot" />
              </div>
              <p className="proof-number">89<span>%</span></p>
              <p className="proof-label">semantic job-match relevance</p>
              <div className="proof-rule" />
              <p className="proof-foot">Illustrative evaluation target across 1,250 test cases. Replace with measured data before publication.</p>
            </aside>
          </div>

          <div className="hero-art" role="img" aria-label="Abstract AI career intelligence signal landscape" />
          <div className="hero-footer">
            <p>Designed as a <strong>career intelligence operating system</strong> — structured input, explainable outcomes.</p>
            <a href="#system" aria-label="Scroll to system section" className="scroll-cue"><ChevronDown size={18} /> SCROLL TO INSPECT</a>
          </div>
        </section>

        <section className="stack-strip" aria-label="Technology stack">
          <p className="stack-label">BUILT WITH</p>
          <div className="stack-items">
            {STACK.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section id="system" className="system-section">
          <div className="section-rail">
            <p className="eyebrow"><span /> 01 / THE SYSTEM</p>
            <h2>One operating model.<br />Three moments of clarity.</h2>
          </div>
          <div className="system-body">
            <p className="section-intro">The platform moves from messy documents to defensible career actions by treating intelligence as a sequence of small, visible systems.</p>
            <div className="flow-list">
              {FLOW.map((step) => {
                const Icon = step.icon;
                return (
                  <article className="flow-item" key={step.id}>
                    <span className="flow-id">{step.id}</span>
                    <div className="flow-icon"><Icon size={20} /></div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                    <ArrowUpRight className="flow-arrow" size={18} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="architecture-section" aria-labelledby="architecture-title">
          <div className="architecture-visual">
            <img src="/manus-storage/signal-ledger-architecture_547d2947.jpg" alt="Abstract illustration of layered career intelligence platform architecture" />
            <div className="architecture-caption">
              <span>PIPELINE / V1</span>
              <span>EXTRACT → EMBED → MATCH → EXPLAIN</span>
            </div>
          </div>
          <div className="architecture-copy">
            <p className="eyebrow"><span /> TECHNICAL ARCHITECTURE</p>
            <h2 id="architecture-title">Fast paths for intelligence that needs to earn trust.</h2>
            <p>FastAPI coordinates parsing, ranking, and recommendation services. PostgreSQL holds the durable career graph; Redis protects the fast path; LangChain and OpenAI create structured reasoning that can be evaluated rather than merely admired.</p>
            <div className="architecture-stack">
              <div><Server size={17} /><span>Service layer</span><strong>FastAPI</strong></div>
              <div><Database size={17} /><span>Persistent context</span><strong>PostgreSQL</strong></div>
              <div><Zap size={17} /><span>Repeat avoidance</span><strong>Redis</strong></div>
              <div><Cloud size={17} /><span>Delivery plane</span><strong>AWS</strong></div>
            </div>
          </div>
        </section>

        <section id="evidence" className="evidence-section">
          <div className="evidence-header">
            <div>
              <p className="eyebrow"><span /> 02 / EVIDENCE PANEL</p>
              <h2>Benchmarks to instrument.<br /><em>Not claims to inherit.</em></h2>
            </div>
            <div className="integrity-note"><ShieldCheck size={20} /><p><strong>Metric integrity note:</strong> every value below is an illustrative benchmark target, intentionally labeled until it is replaced with observed production data.</p></div>
          </div>
          <div className="metrics-grid">
            {METRICS.map((metric) => <MetricTile key={metric.label} {...metric} />)}
          </div>
          <div className="evidence-lower">
            <div className="benchmark-card">
              <div className="benchmark-card-top"><span className="evidence-tag">EVALUATION / TARGET</span><BrainCircuit size={19} /></div>
              <div className="benchmark-score"><b>97.6%</b><span>successful<br />structured output</span></div>
              <div className="mini-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <p>Designed to be measured on schema validity, relevance, and human review—not output volume alone.</p>
            </div>
            <div className="data-art-wrap">
              <img src="/manus-storage/signal-ledger-data-detail_aca42a6f.jpg" alt="Conceptual visualization of ranking signals in career matching" />
              <div className="data-art-label"><span>RANKED MATCHES</span><span>VECTOR SIGNALS / 2026</span></div>
            </div>
          </div>
        </section>

        <section className="outcomes-section">
          <div className="outcome-intro"><p className="eyebrow"><span /> 03 / ENGINEERING OUTCOMES</p><h2>Build for fast answers.<br />Prove the hard parts.</h2></div>
          <div className="outcome-list">
            <article><Gauge size={20} /><div><span>PERFORMANCE</span><p><strong>142 ms</strong> median latency, engineered to keep matching flow responsive under realistic load.</p></div></article>
            <article><Layers3 size={20} /><div><span>EFFICIENCY</span><p><strong>46%</strong> fewer repeated LLM/API calls through Redis-aware cache design.</p></div></article>
            <article><Code2 size={20} /><div><span>QUALITY</span><p><strong>84%</strong> backend test coverage across services and integration-critical behavior.</p></div></article>
            <article><GitBranch size={20} /><div><span>RELIABILITY</span><p><strong>99.2%</strong> successful AWS deployment and health-check rate across tracked CI/CD runs.</p></div></article>
          </div>
        </section>

        <section id="bullets" className="bullets-section">
          <div className="bullets-heading">
            <p className="eyebrow"><span /> 04 / RESUME-READY COPY</p>
            <h2>Strong bullets explain the system—and <em>show the proof.</em></h2>
            <p>These bullets use the illustrative targets displayed above. Replace every benchmark with your own measured result before including them on a resume, portfolio, or application.</p>
          </div>
          <div className="bullets-list">
            {BULLETS.map((text, index) => <CopyBullet key={text} text={text} index={index} />)}
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-line" />
          <p className="eyebrow"><span /> THE SIGNAL IS THE STORY</p>
          <h2>Build what you can measure.<br />Tell what you can <em>prove.</em></h2>
          <a href="#top" className="closing-link">Back to the brief <ArrowUpRight size={18} /></a>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand"><img src="/manus-storage/signal-ledger-logo_0ac8fa0a.png" alt="" className="brand-mark" /><span className="brand-name">CAREER <i /> SIGNAL</span></div>
        <p>AI career intelligence &amp; job automation platform</p>
        <p>© 2026 / ILLUSTRATIVE CASE STUDY</p>
      </footer>
    </div>
  );
}
