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
            <ArrowIcon back />
            Back to all work
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ back = false }) {
  return (
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
      <path d={back ? "M19 12H5m7-7-7 7 7 7" : "M7 17 17 7M7 7h10v10"} />
    </svg>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();

  const p = projects.find((project) => project.slug === slug);
  const cs = caseStudies[slug];

  if (!p) {
    return <Navigate to="/work" replace />;
  }

  const isComingSoon =
    !cs ||
    cs.status === "coming-soon" ||
    cs.status === "draft" ||
    !Array.isArray(cs.sections) ||
    cs.sections.length === 0;

  if (isComingSoon) {
    return <ComingSoon title={p.title} />;
  }

  // Scroll tanpa mengubah URL, sehingga bisa dipakai dengan HashRouter.
  function goToSection(index) {
    const section = document.getElementById(`case-study-section-${index + 1}`);

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });

    section.querySelector("h2")?.focus({ preventScroll: true });
  }

  return (
    <article className="font-sans text-ink">
      {/* Back navigation */}
      <Link
        to="/work"
        className="mb-8 inline-flex min-h-[44px] items-center gap-2 rounded-md text-sm font-semibold text-ink/65 transition-colors hover:text-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
      >
        <ArrowIcon back />
        All work
      </Link>

      {/* Introduction */}
      <header className="grid gap-8 pb-10 lg:grid-cols-12 lg:gap-12 lg:pb-14">
        <div className="min-w-0 lg:col-span-8">
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
            <span aria-hidden="true" className="size-2 rounded-full bg-tang" />
            Project case study
          </p>

          <h1
            tabIndex={-1}
            className="max-w-[20ch] text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[1.06] tracking-[-0.045em]"
          >
            {p.title}
          </h1>

          {cs.summary && (
            <p className="mt-6 max-w-[60ch] text-base leading-[1.8] text-ink/70 md:text-lg">
              {cs.summary}
            </p>
          )}

          {p.tags?.length > 0 && (
            <ul
              aria-label="Project categories"
              className="mt-6 flex flex-wrap gap-2"
            >
              {p.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-semibold"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Project facts */}
        {cs.details && Object.keys(cs.details).length > 0 && (
          <aside className="min-w-0 self-start rounded-[24px] border border-line bg-surface p-6 lg:col-span-4 lg:mt-9">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
              Project details
            </h2>

            <dl>
              {Object.entries(cs.details).map(([label, value], index) => (
                <div
                  key={label}
                  className={index > 0 ? "mt-4 border-t border-line pt-4" : ""}
                >
                  <dt className="text-xs font-medium text-ink/55">{label}</dt>

                  <dd className="mt-1.5 break-words text-sm font-semibold leading-relaxed">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        )}
      </header>

      {/* Project preview */}
      <figure className="overflow-hidden rounded-[24px] border border-line bg-surface md:rounded-[32px]">
        {p.image ? (
          <div className="bg-lilac/40 p-4 sm:p-7 md:p-10">
            <img
              src={p.image}
              alt={p.imageAlt || `${p.title} — interface preview`}
              decoding="async"
              className="mx-auto block h-auto w-full rounded-xl shadow-[0_16px_48px_rgba(18,17,43,0.12)]"
            />
          </div>
        ) : (
          <div className="group relative isolate flex aspect-[4/3] items-end justify-center overflow-hidden bg-lilac md:aspect-[21/9] md:justify-end md:pr-[10%]">
            <Mockup type={p.mock} accent="#6E5CFF" />
          </div>
        )}

        <figcaption className="border-t border-line px-5 py-4 text-xs leading-relaxed text-ink/60 sm:px-7">
          {cs.imageCaption || p.title}
        </figcaption>
      </figure>

      {/* Main content */}
      <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
        <aside className="hidden lg:sticky lg:top-28 lg:col-span-3 lg:block">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-ink/50">
            In this case study
          </p>

          <nav aria-label="Case study sections">
            <ol className="space-y-1 border-l border-line">
              {cs.sections.map((section, index) => (
                <li key={`nav-${index}`}>
                  <button
                    type="button"
                    onClick={() => goToSection(index)}
                    className="flex w-full items-start gap-3 rounded-r-lg px-4 py-3 text-left text-sm leading-relaxed text-ink/65 transition-colors hover:bg-lilac/40 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
                  >
                    <span className="pt-0.5 text-xs font-semibold text-ink/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{section.h}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="min-w-0 lg:col-span-9">
          {cs.sections.map((section, index) => (
            <section
              key={`${section.h}-${index}`}
              id={`case-study-section-${index + 1}`}
              aria-labelledby={`case-study-heading-${index + 1}`}
              className={`scroll-mt-28 ${
                index > 0
                  ? "mt-10 border-t border-line pt-10 md:mt-14 md:pt-14"
                  : ""
              }`}
            >
              <Reveal>
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-lilac text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2
                    id={`case-study-heading-${index + 1}`}
                    tabIndex={-1}
                    className="text-[clamp(25px,3vw,36px)] font-extrabold leading-tight tracking-[-0.035em]"
                  >
                    {section.h}
                  </h2>
                </div>

                <p className="max-w-[68ch] whitespace-pre-line text-base leading-[1.9] text-ink/75 md:text-lg">
                  {section.p}
                </p>

                {section.image && (
                  <figure className="mt-7 overflow-hidden rounded-[20px] border border-line bg-surface">
                    <img
                      src={section.image}
                      alt={section.imageAlt || ""}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full"
                    />

                    {section.caption && (
                      <figcaption className="border-t border-line px-5 py-3 text-xs leading-relaxed text-ink/60">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {section.note && (
                  <aside className="mt-7 rounded-r-[20px] border-l-[3px] border-cobalt bg-lilac/30 p-5 sm:p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-cobalt">
                      Behind the decision
                    </p>

                    <p className="max-w-[65ch] text-sm font-medium leading-[1.8] text-ink/80 md:text-base">
                      {section.note}
                    </p>
                  </aside>
                )}
              </Reveal>
            </section>
          ))}
        </div>
      </div>

      {/* Closing navigation */}
      <footer className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-ink p-7 text-ground sm:p-10 md:mt-24 md:flex-row md:items-center">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ground/60">
            Keep exploring
          </p>

          <h2 className="text-3xl font-extrabold tracking-[-0.035em] md:text-4xl">
            More work, more stories.
          </h2>
        </div>

        <Link
          to="/work"
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-3 rounded-full bg-ground px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-tang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tang focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          Back to all work
          <ArrowIcon />
        </Link>
      </footer>
    </article>
  );
}
