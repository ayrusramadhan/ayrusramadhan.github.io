import { Link } from "react-router-dom";
import { NAME, EMAIL, RESUME, socials, about } from "../data.js";

function ArrowIcon({ download = false }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {download ? (
        <>
          <path d="M12 3v12m-5-5 5 5 5-5" />
          <path d="M5 16v4h14v-4" />
        </>
      ) : (
        <path d="M7 17 17 7M7 7h10v10" />
      )}
    </svg>
  );
}

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-cobalt focus-visible:ring-offset-4 " +
  "focus-visible:ring-offset-ground";

export default function About() {
  const initials = NAME.trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  const profileLinks = socials.filter(
    ([, href]) => !href.startsWith("mailto:"),
  );

  return (
    <div className="space-y-16 font-sans text-ink md:space-y-24">
      {/* Introduction */}
      <section
        aria-labelledby="about-heading"
        className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
      >
        <div className="min-w-0 lg:col-span-7">
          <p className="mb-5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em]">
            <span aria-hidden="true" className="size-2 rounded-full bg-tang" />A
            little about me
          </p>

          <h1
            id="about-heading"
            tabIndex={-1}
            className="max-w-[12ch] text-[clamp(42px,6vw,80px)] font-extrabold leading-[1.03] tracking-[-0.055em]"
          >
            {about.headline}
          </h1>

          <p className="mt-7 text-xl font-semibold tracking-tight md:text-2xl">
            Hi, I'm {NAME}.
          </p>

          <p className="mt-3 max-w-[48ch] text-base leading-relaxed text-ink/70 md:text-lg">
            {about.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME.url}
              download={RESUME.filename}
              className={`inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ground transition-colors hover:bg-cobalt ${focusClass}`}
            >
              Download CV
              <ArrowIcon download />
            </a>

            <Link
              to="/work"
              className={`inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-lilac ${focusClass}`}
            >
              Explore my work
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Profile card */}
        <div className="min-w-0 lg:col-span-5">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-tang">
            <div className="relative aspect-[4/4] sm:aspect-[5/4] lg:aspect-[4/4]">
              {about.photo ? (
                <img
                  src={about.photo}
                  alt={`Portrait of ${NAME}`}
                  className="size-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="relative flex size-full items-center justify-center overflow-hidden"
                >
                  <div className="absolute -right-16 -top-16 size-64 rounded-full border border-ink/15" />
                  <div className="absolute -bottom-24 -left-12 size-80 rounded-full border border-ink/15" />

                  <span className="relative text-[clamp(100px,13vw,180px)] font-extrabold leading-none tracking-[-0.08em]">
                    {initials}
                  </span>
                </div>
              )}

              <span className="absolute left-5 top-5 rounded-full bg-ground px-4 py-2 text-xs font-semibold text-ink">
                {about.role}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-ink/15 px-6 py-5">
              <div className="min-w-0">
                <p className="text-lg font-bold">{NAME}</p>
                <p className="mt-1 text-sm text-ink/75">
                  Design with clarity and intention.
                </p>
              </div>

              <span aria-hidden="true" className="shrink-0 text-4xl">
                ✳
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
            {profileLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-sm text-sm font-medium text-ink/70 transition-colors hover:text-cobalt ${focusClass}`}
              >
                {label}
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Working approach */}
      {/* <section
        aria-labelledby="approach-heading"
        className="border-t border-line pt-10 md:pt-12"
      >
        <div className="mb-8 grid gap-4 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/60">
              My approach
            </p>

            <h2
              id="approach-heading"
              className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl"
            >
              Good design starts with
              <br className="hidden sm:block" /> better questions.
            </h2>
          </div>

          <p className="max-w-[44ch] self-end text-base leading-relaxed text-ink/70">
            A clear process helps turn an unclear problem into something people
            can understand and use.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {about.approach.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-line bg-surface p-6 md:p-7"
            >
              <span className="mb-8 inline-flex size-10 items-center justify-center rounded-full bg-lilac text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-ink/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section> */}

      {/* Tools */}
      <section
        aria-labelledby="tools-heading"
        className="grid gap-8 lg:grid-cols-12 lg:gap-14"
      >
        <div className="lg:col-span-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/60">
            My toolkit
          </p>

          <h2
            id="tools-heading"
            className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl"
          >
            The tools behind
            <br className="hidden lg:block" /> the work.
          </h2>
        </div>

        <dl className="min-w-0 lg:col-span-8">
          {about.tools.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 border-t border-line py-5 sm:grid-cols-[1fr_1.2fr] sm:items-center sm:gap-5"
            >
              <dt className="text-sm font-semibold">{group.category}</dt>

              <dd className="flex flex-wrap gap-2">
                {group.names.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line bg-surface px-4 py-2 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Contact */}
      <section className="flex flex-col items-start justify-between gap-6 rounded-[28px] bg-lilac p-7 sm:p-10 md:flex-row md:items-center">
        <div>
          <p className="mb-2 text-sm font-medium">Have something in mind?</p>

          <h2 className="text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
            Let's make it happen.
          </h2>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className={`inline-flex min-h-[48px] shrink-0 items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ground transition-colors hover:bg-cobalt ${focusClass}`}
        >
          Get in touch
          <ArrowIcon />
        </a>
      </section>
    </div>
  );
}
