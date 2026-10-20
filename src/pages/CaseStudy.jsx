import { Link, Navigate, useParams } from "react-router-dom";
import Mockup from "../components/Mockup.jsx";
import Reveal from "../components/Reveal.jsx";
import { caseStudies, projects } from "../data.js";

function ComingSoon({ title }) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-8 font-sans text-ink">
      <div className="relative isolate w-full max-w-3xl overflow-hidden rounded-[32px] border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-lilac/40"
        />

        <div className="relative">
          {/* <div
            aria-hidden="true"
            className="mx-auto mb-6 flex size-20 items-center justify-center rounded-[24px] bg-lilac text-ink"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          </div> */}

          <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]">
            <span aria-hidden="true" className="size-2 rounded-full bg-tang" />
            Case study in progress
          </span>

          <h1
            tabIndex={-1}
            className="mt-6 text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.05] tracking-[-0.045em]"
          >
            The full story
            <br />
            is coming soon.
          </h1>

          <p className="mx-auto mt-6 max-w-[40ch] text-lg font-semibold leading-relaxed">
            {title}
          </p>

          <p className="mx-auto mt-3 max-w-[46ch] text-base leading-relaxed text-ink/70">
            I'm putting together the process, design decisions, and outcomes
            behind this project. Check back soon for the full case study.
          </p>

          <Link
            to="/work"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ground transition-colors hover:bg-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-4"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            Back to all work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();

  const p = projects.find((project) => project.slug === slug);
  const cs = caseStudies[slug];

  // Slug tidak ditemukan dalam daftar project.
  if (!p) {
    return <Navigate to="/work" replace />;
  }

  // Detail belum tersedia, masih disusun, atau belum berisi section.
  const isComingSoon =
    !cs ||
    cs.status === "coming-soon" ||
    cs.status === "draft" ||
    !Array.isArray(cs.sections) ||
    cs.sections.length === 0;

  if (isComingSoon) {
    return <ComingSoon title={p.title} />;
  }

  return (
    <>
      {/* Project introduction */}
      <section className="rounded-[32px] bg-cobalt p-[clamp(28px,6vw,72px)] text-white">
        <h1
          tabIndex={-1}
          className="mb-6 max-w-[14ch] font-sans text-[clamp(36px,6.5vw,88px)] font-extrabold leading-[.95] tracking-[-.045em]"
        >
          {p.title}
        </h1>

        {cs.summary && (
          <p className="text-lg leading-[1.7] sm:text-xl">{cs.summary}</p>
        )}

        {cs.details && Object.keys(cs.details).length > 0 && (
          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 font-sans text-[15px] font-medium sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(cs.details).map(([label, value]) => (
              <div key={label} className="min-w-0">
                <dt className="font-normal opacity-75">{label}</dt>

                <dd className="mt-1 break-words">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      {/* Project preview */}
      <div className="group relative isolate mt-6 flex aspect-[4/3] items-end justify-center overflow-hidden rounded-[28px] bg-lilac md:aspect-[21/9] md:justify-end md:pr-[10%]">
        <Mockup type={p.mock} accent="#6E5CFF" />
      </div>

      {/* Case study content */}
      <div className="mt-6 rounded-[28px] bg-surface p-5 sm:p-8 lg:p-16">
        {cs.sections.map((section, index) => (
          <Reveal
            key={`${section.h}-${index}`}
            className={`grid gap-6 lg:grid-cols-12 ${index > 0 ? "mt-16" : ""}`}
          >
            <div className="min-w-0 max-w-[680px] lg:col-span-7 lg:col-start-2">
              <h2 className="font-sans text-[30px] font-extrabold leading-tight tracking-[-.02em]">
                {section.h}
              </h2>

              <p className="mt-4 leading-relaxed">{section.p}</p>
            </div>

            {section.note && (
              <aside
                className={[
                  "ml-2 self-start rounded-[4px_4px_4px_16px]",
                  "bg-butter p-4 font-sans text-sm font-medium",
                  "leading-[1.45] text-ink",
                  "shadow-[0_6px_14px_rgba(18,17,43,.15)]",
                  "lg:col-span-4 lg:ml-0",
                  index % 2 ? "rotate-[1.2deg]" : "-rotate-[1.5deg]",
                ].join(" ")}
              >
                {section.note}
              </aside>
            )}
          </Reveal>
        ))}
      </div>

      <Link
        to="/work"
        className="mt-14 inline-block font-sans text-[clamp(24px,3.4vw,36px)] font-extrabold tracking-[-.02em] underline decoration-tang decoration-2 underline-offset-4"
      >
        Back to all work
      </Link>
    </>
  );
}
