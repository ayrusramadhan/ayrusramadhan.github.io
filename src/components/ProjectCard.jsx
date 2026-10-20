import { Link } from "react-router-dom";
import Mockup from "./Mockup.jsx";
import Reveal from "./Reveal.jsx";

const PANEL = {
  cobalt: ["bg-cobalt text-white", "#3A2EFF"],
  tang: ["bg-tang text-ink", "#FF6B2C"],
  lilac: ["bg-lilac text-ink", "#6E5CFF"],
  mint: ["bg-mint text-ink", "#16A87A"],
};

export default function ProjectCard({ p }) {
  const [cls, accent] = PANEL[p.panel] ?? PANEL.cobalt;

  return (
    <Reveal>
      <Link to={`/work/${p.slug}`} className="project-card group block">
        <div
          className={`relative isolate flex aspect-[4/5] items-end justify-center overflow-hidden rounded-[28px] md:aspect-[16/10] md:justify-end md:pr-[10%] ${cls}`}
        >
          <h3 className="absolute left-7 top-6 z-10 max-w-[13ch] font-sans text-[clamp(26px,3.8vw,52px)] font-extrabold leading-none tracking-[-.035em]">
            {p.title}
          </h3>

          {/* Gambar menggantikan mockup, bukan background */}
          {p.image ? (
            <div className="pointer-events-none absolute bottom-0 right-[5%] w-[80%] translate-y-[15%] md:right-[10%] md:w-[55%]">
              <img
                src={p.image}
                alt={p.imageAlt ?? ""}
                loading="lazy"
                decoding="async"
                className="project-card-image block h-auto w-full rounded-t-[20px]"
              />
            </div>
          ) : (
            <Mockup type={p.mock} accent={accent} />
          )}

          <div className="absolute bottom-6 left-7 right-7 z-10 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border-[1.5px] border-current px-3.5 py-2 font-sans text-[13px] font-semibold leading-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-lg decoration-tang decoration-2 underline-offset-4 group-hover:underline">
          {p.outcome}
        </p>
      </Link>
    </Reveal>
  );
}
