import { useState } from "react";
import type { ProjectVisualSpec } from "../../data/projects";

// Every preview is a 16:10 box. Sizes inside use container-query units (cqw = 1% of the box
// width), so the same drawing works at full size in a featured row and small in a hover preview.
const box =
  "@container absolute inset-0 overflow-hidden bg-surface-sunken bg-[radial-gradient(rgba(255,255,255,.06)_1px,transparent_1px)] bg-size-[14px_14px] font-sans text-ink";

const panel = "absolute inset-x-[8cqw] inset-y-[7cqw] flex flex-col gap-[2.6cqw]";
const panelHeading = "mb-[1cqw] flex items-baseline justify-between";
const panelTitle = "font-display text-[4.2cqw] font-semibold";
const caption = "font-mono text-[2.2cqw] text-muted";
const tag = "rounded-full border px-[2cqw] py-[1cqw]";
const tagRow = "mt-auto flex flex-wrap gap-[1.4cqw] font-mono text-[2.1cqw]";
const cursor = "ml-[.8cqw] inline-block bg-accent align-[-.5cqw]";

export default function ProjectVisual({
  visual,
  title,
  className = "",
}: {
  visual: ProjectVisualSpec;
  title: string; // shown if a screenshot fails to load
  className?: string;
}) {
  return <div className={`${box} ${className}`}>{renderVisual(visual, title)}</div>;
}

function renderVisual(visual: ProjectVisualSpec, title: string) {
  switch (visual.kind) {
    case "screenshot":
      return <Screenshot src={visual.src} alt={visual.alt} title={title} />;
    case "chat":
      return <ChatVisual />;
    case "tracker":
      return <TrackerVisual />;
    case "scores":
      return <ScoresVisual />;
    case "network":
      return <NetworkVisual />;
    case "fitness":
      return <FitnessVisual />;
    case "trigram":
      return <TrigramVisual />;
    case "terminal":
      return <TerminalVisual />;
  }
}

// Falls back to the project's name on the dot grid if the image is missing or fails to load,
// instead of a broken-image icon with alt text.
function Screenshot({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-[8cqw] text-center">
        <span className="font-display text-[6cqw] font-semibold text-dim">{title}</span>
      </div>
    );
  }
  return (
    <img
      className="absolute inset-0 block size-full max-w-none object-cover object-top"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function ChatVisual() {
  return (
    <div className="absolute inset-x-[8cqw] inset-y-[6cqw] flex flex-col gap-[3.2cqw] rounded-[3cqw] border border-white/10 bg-[#121819] p-[4cqw]">
      <div className="flex justify-between font-mono text-[2.4cqw] text-muted">
        <span className="inline-flex items-center gap-[1.4cqw]">
          <i className="size-[1.6cqw] rounded-full bg-accent" />
          FAQ assistant
        </span>
        <span>streaming</span>
      </div>
      <div className="max-w-[75%] self-end rounded-[2.6cqw_2.6cqw_.6cqw_2.6cqw] bg-accent/16 px-[3cqw] py-[2.2cqw] text-[2.9cqw] leading-[1.4] text-[#D7F7F1]">
        Which other lenders would you recommend?
      </div>
      <div className="max-w-[75%] self-start rounded-[2.6cqw_2.6cqw_2.6cqw_.6cqw] border border-white/8 bg-[#1A2122] px-[3cqw] py-[2.2cqw] text-[2.9cqw] leading-[1.4]">
        I can only help with Page Financials questions.
        <i className={`${cursor} h-[3cqw] w-[.8cqw]`} />
      </div>
      <div className={tagRow}>
        <span className={`${tag} border-white/12 text-faint`}>3 FAQ chunks · pgvector</span>
        <span className={`${tag} border-accent/45 text-accent-bright`}>judge: pass</span>
      </div>
    </div>
  );
}

const trackedRecords = [
  { label: "Feeding", d: "M9 2h6M10 2v3l-2 3v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8l-2-3V2M8 12h8" },
  { label: "Sleep", d: "M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" },
  { label: "Nappies", d: "M3 7h18l-2 5a8 8 0 0 1-14 0zM9 12v4M15 12v4" },
  { label: "Temperature", d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0zM12 9v7" },
  { label: "Growth", d: "M3 20h18M6 16l4-5 3 3 5-7M15 7h3v3" },
  { label: "Medication", d: "M10.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 0 1-7-7zM7 10l7 7" },
];

function TrackerVisual() {
  return (
    <div className={panel}>
      <div className={panelHeading}>
        <b className={panelTitle}>nurse.ly</b>
        <span className={caption}>child health records</span>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-[2.4cqw]">
        {trackedRecords.map((record) => (
          <div
            key={record.label}
            className="flex flex-col justify-between rounded-[2.4cqw] border border-white/8 bg-[#121819] p-[2.6cqw]"
          >
            <svg
              className="size-[5cqw] fill-none stroke-accent-bright"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d={record.d} />
            </svg>
            <span className="text-[2.6cqw] text-ink-soft">{record.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// F1 scores per emotion, from the notebook's classification report.
const emotionScores = [
  { label: "sadness", f1: 0.94 },
  { label: "joy", f1: 0.92 },
  { label: "love", f1: 0.77 },
  { label: "anger", f1: 0.9 },
  { label: "fear", f1: 0.84 },
  { label: "surprise", f1: 0.72 },
];

function ScoresVisual() {
  return (
    <div className={panel}>
      <div className={panelHeading}>
        <b className={panelTitle}>F1 by emotion</b>
        <span className={caption}>83,362 test tweets</span>
      </div>
      {emotionScores.map((score) => (
        <div
          key={score.label}
          className="grid grid-cols-[17cqw_minmax(0,1fr)_7cqw] items-center gap-[2cqw] text-[2.6cqw] text-ink-soft"
        >
          <span>{score.label}</span>
          <span className="h-[3.4cqw] overflow-hidden rounded-full bg-white/6">
            <span
              className={`block h-full rounded-full bg-accent ${score.f1 < 0.85 ? "opacity-60" : ""}`}
              style={{ width: `${score.f1 * 100}%` }}
            />
          </span>
          <span className="text-right font-mono text-[2.4cqw] text-ink">{score.f1.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

const cifarClasses = ["airplane", "car", "bird", "cat", "deer", "dog", "frog", "horse", "ship", "truck"];
const layer = "flex flex-col items-center gap-[2cqw]";
const layerLabel = "font-mono text-[2.1cqw] text-muted";
const arrow = "text-[3.4cqw] not-italic text-dim";
const featureMap = "w-[2.2cqw] rounded-[.6cqw]";
const neuron = "size-[1.8cqw] rounded-full";

function NetworkVisual() {
  return (
    <div className="absolute inset-x-[7cqw] inset-y-[8cqw] flex flex-col justify-between">
      <div className="flex items-center justify-between gap-[1.5cqw]">
        <div className={layer}>
          <div className="relative size-[15cqw]">
            <i className="absolute inset-0 translate-x-[1.6cqw] translate-y-[-1.6cqw] rounded-[1.2cqw] bg-[#1D4A44]" />
            <i className="absolute inset-0 translate-x-[.8cqw] translate-y-[-0.8cqw] rounded-[1.2cqw] bg-[#2A6B62]" />
            <i className="absolute inset-0 rounded-[1.2cqw] bg-accent" />
          </div>
          <small className={layerLabel}>32×32×3</small>
        </div>
        <em className={arrow}>→</em>
        <div className={layer}>
          <div className="flex items-end gap-[.7cqw]">
            <i className={`${featureMap} h-[13cqw] bg-[#2A6B62]`} />
            <i className={`${featureMap} h-[13cqw] bg-[#2A6B62]`} />
            <i className={`${featureMap} h-[9cqw] bg-accent`} />
            <i className={`${featureMap} h-[9cqw] bg-accent`} />
            <i className={`${featureMap} h-[6cqw] bg-accent-bright`} />
          </div>
          <small className={layerLabel}>conv + pool</small>
        </div>
        <em className={arrow}>→</em>
        <div className={layer}>
          <div className="flex flex-col gap-[.7cqw]">
            {[false, true, false, false, false].map((lit, i) => (
              <i key={i} className={`${neuron} ${lit ? "bg-accent" : "bg-[#2A6B62]"}`} />
            ))}
          </div>
          <small className={layerLabel}>dense</small>
        </div>
        <em className={arrow}>→</em>
        <div className="rounded-[1.6cqw] border border-accent/45 bg-accent/16 px-[2.4cqw] py-[1.6cqw] font-mono text-[2.6cqw] text-accent-bright">
          cat
        </div>
      </div>
      <div className={tagRow}>
        {cifarClasses.map((name) => (
          <span
            key={name}
            className={`${tag} ${name === "cat" ? "border-accent/45 text-accent-bright" : "border-white/12 text-faint"}`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

// Best fitness per generation, from the GA notebook's output (gen 10 → 50: 30, 30, 32, 33, 35).
function FitnessVisual() {
  return (
    <div className={panel}>
      <div className={panelHeading}>
        <b className={panelTitle}>Best fitness</b>
        <span className={caption}>50 generations</span>
      </div>
      <svg
        className="w-full flex-1"
        role="img"
        aria-label="Best fitness rises from 30 to 35 over 50 generations"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
      >
        <line className="stroke-white/12" strokeWidth=".4" x1="0" y1="45" x2="100" y2="45" />
        <line className="stroke-white/6" strokeWidth=".4" x1="0" y1="25" x2="100" y2="25" />
        <line className="stroke-white/6" strokeWidth=".4" x1="0" y1="5" x2="100" y2="5" />
        <polyline
          className="fill-none stroke-accent"
          strokeWidth="1.2"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          points="4,42 27,42 50,29 73,22 96,8"
        />
      </svg>
      <div className="flex justify-between font-mono text-[2.1cqw] text-faint">
        <span>gen 10 · 30</span>
        <span>gen 30 · 32</span>
        <span className="text-accent-bright">gen 50 · 35</span>
      </div>
    </div>
  );
}

const token = "rounded-[1.4cqw] border px-[2.2cqw] py-[1.4cqw]";

function TrigramVisual() {
  return (
    <div className="absolute inset-[8cqw] flex flex-col justify-center gap-[5cqw]">
      <div className="font-mono text-[5.4cqw]">
        P(w<sub>3</sub> | w<sub>1</sub>, w<sub>2</sub>)
      </div>
      <div className="flex flex-wrap items-center gap-[1.8cqw] font-mono text-[3cqw]">
        {["the", "fulton", "county"].map((word) => (
          <span key={word} className={`${token} border-white/10 bg-[#1A2122]`}>
            {word}
          </span>
        ))}
        <em className="not-italic text-dim">→</em>
        <span className={`${token} border-accent/45 bg-accent/16 text-accent-bright`}>grand</span>
      </div>
      <div className={caption}>Brown corpus · Laplace smoothing · perplexity</div>
    </div>
  );
}

const prompt = <b className="font-normal text-accent-bright">&gt;</b>;

function TerminalVisual() {
  return (
    <div className="absolute inset-x-[7cqw] inset-y-[6cqw] flex flex-col overflow-hidden rounded-[2.4cqw] border border-white/12 bg-[#070909]">
      <div className="flex items-center gap-[1.2cqw] border-b border-white/8 px-[2.6cqw] py-[2cqw]">
        <i className="size-[1.6cqw] rounded-full bg-[#3A4442]" />
        <i className="size-[1.6cqw] rounded-full bg-[#3A4442]" />
        <i className="size-[1.6cqw] rounded-full bg-[#3A4442]" />
        <span className="ml-[1.4cqw] font-mono text-[2cqw] text-faint">Customer — localhost:8888</span>
      </div>
      <div className="flex flex-col gap-[1.6cqw] p-[3cqw] font-mono text-[2.7cqw] leading-[1.35]">
        <span>{prompt} order 2 teas and 1 coffee</span>
        <span className="text-faint">order placed</span>
        <span>{prompt} order status</span>
        <span className="text-ink-soft">waiting: 1 coffee · brewing: 2 tea</span>
        <span className="text-ink-soft">tray: —</span>
        <span>
          {prompt} collect
          <i className={`${cursor} h-[2.8cqw] w-[1.4cqw]`} />
        </span>
      </div>
    </div>
  );
}
