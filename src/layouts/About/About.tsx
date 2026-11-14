
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-page px-6 pt-28 pb-10">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <article className="min-w-0 rounded-card border border-line bg-surface p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(94,234,212,.35)] col-span-2 flex flex-col gap-4 max-[760px]:col-auto">
          <span className="self-start rounded-full bg-white/5 px-3 py-1.5 text-[12px] text-muted">
            Education
          </span>
          <h2 className="text-[30px] tracking-[-0.02em]">
            BSc Artificial Intelligence — First Class
          </h2>
          <p className="text-[15px] leading-[1.6] text-muted">
            University of Essex, Colchester · 2023 – 2026 · Dean’s List of
            Excellence
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-soft">
              Machine Learning
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-soft">
              Computer Vision
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-soft">
              Natural Language Engineering
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-soft">
              Data Structures &amp; Algorithms
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-soft">
              Evolutionary Computation
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-soft">
              Data Science
            </span>
          </div>
        </article>
        <article className="min-w-0 rounded-card border border-line bg-surface p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(94,234,212,.35)] flex flex-col justify-between gap-6">
          <span className="self-start rounded-full bg-white/5 px-3 py-1.5 text-[12px] text-muted">
            Featured result
          </span>
          <div>
            <div className="font-display text-[72px] leading-none font-semibold tracking-[-0.04em] text-accent">
              96.75%
            </div>
            <p className="text-[15px] leading-[1.6] text-muted mt-3">
              Test accuracy of Cognify’s Random Forest model for predicting
              cognitive-impairment risk.
            </p>
          </div>
        </article>
        <article className="min-w-0 rounded-card border border-line bg-surface p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(94,234,212,.35)] flex flex-col gap-4.5">
          <div className="flex items-center justify-between">
            <span className="self-start rounded-full bg-white/5 px-3 py-1.5 text-[12px] text-muted">
              GitHub
            </span>
            <a
              className="text-[13px] text-muted"
              href="https://github.com/davidrapu"
            >
              @davidrapu ↗
            </a>
          </div>
          <div>
            <a
              className="flex justify-between border-b border-white/6 py-3 font-mono text-[14px]"
              href="https://github.com/davidrapu/chatbots"
            >
              <span>chatbots</span>
              <span className="text-[12px] text-faint">Python · TS</span>
            </a>
            <a
              className="flex justify-between border-b border-white/6 py-3 font-mono text-[14px]"
              href="https://github.com/davidrapu/Cognify"
            >
              <span>Cognify</span>
              <span className="text-[12px] text-faint">TypeScript</span>
            </a>
            <a
              className="flex justify-between border-b border-white/6 py-3 font-mono text-[14px]"
              href="https://github.com/davidrapu/nurse.ly"
            >
              <span>nurse.ly</span>
              <span className="text-[12px] text-faint">Python · TS</span>
            </a>
            <a
              className="flex justify-between border-b border-white/6 py-3 font-mono text-[14px]"
              href="https://github.com/davidrapu/CNN-Model"
            >
              <span>CNN-Model</span>
              <span className="text-[12px] text-faint">Python</span>
            </a>
          </div>
        </article>
        <article className="min-w-0 rounded-card border border-line bg-surface p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(94,234,212,.35)] col-span-2 flex flex-col gap-5 max-[760px]:col-auto">
          <span className="self-start rounded-full bg-white/5 px-3 py-1.5 text-[12px] text-muted">
            Tech stack
          </span>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-7 gap-y-5">
            <div>
              <dt className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-accent">
                LANGUAGES
              </dt>
              <dd className="text-[14px] leading-[1.55] text-ink-soft">
                Python, TypeScript, JavaScript, Java, SQL, C++
              </dd>
            </div>
            <div>
              <dt className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-accent">
                AI / ML
              </dt>
              <dd className="text-[14px] leading-[1.55] text-ink-soft">
                Claude &amp; Gemini APIs, RAG, LLM evaluation, embeddings,
                PyTorch, scikit-learn
              </dd>
            </div>
            <div>
              <dt className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-accent">
                BACKEND
              </dt>
              <dd className="text-[14px] leading-[1.55] text-ink-soft">
                FastAPI, Node.js, Express, REST, JWT, Prisma, Pydantic
              </dd>
            </div>
            <div>
              <dt className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-accent">
                FRONTEND
              </dt>
              <dd className="text-[14px] leading-[1.55] text-ink-soft">
                React, TypeScript, Tailwind CSS, shadcn/ui
              </dd>
            </div>
            <div>
              <dt className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-accent">
                DATA
              </dt>
              <dd className="text-[14px] leading-[1.55] text-ink-soft">
                PostgreSQL, pgvector, MySQL, pandas, NumPy
              </dd>
            </div>
            <div>
              <dt className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-accent">
                DEVOPS
              </dt>
              <dd className="text-[14px] leading-[1.55] text-ink-soft">
                Docker, Git, Vercel, Railway, Jira, Agile/Scrum
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}
