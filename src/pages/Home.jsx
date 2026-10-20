import Hero from "../components/Hero.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { Button, Section } from "../components/ui.jsx";
import { EMAIL, projects } from "../data.js";

const mark = "rounded-[.2em] px-[.18em] text-ink [box-decoration-break:clone]";

export default function Home() {
  return (
    <>
      <Hero />
      <p className="max-w-[56ch] text-[clamp(18px,2vw,22px)] leading-[1.7]">
        I'm a UI/UX Designer with 3 years of experience working on B2B
        applications, internal management systems, and monitoring dashboards. I
        turn complex business requirements into intuitive web and mobile
        experiences.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/work">See my work</Button>
        <Button href={`mailto:${EMAIL}`} variant="outline">
          Email me
        </Button>
      </div>

      <Section title="Selected work">
        <div className="grid gap-14">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="mt-12">
          <Button to="/work" variant="outline">
            See all work
          </Button>
        </div>
      </Section>

      <Section title="How I work">
        <Reveal
          as="p"
          className="max-w-none font-sans text-[clamp(32px,6vw,80px)] font-extrabold leading-[1.25] tracking-[-.035em]"
        >
          <mark className={`${mark} bg-tang`}>Understand the problem.</mark>{" "}
          <mark className={`${mark} bg-lilac`}>Design and prototype.</mark>{" "}
          <mark className={`${mark} bg-mint`}>Collaborate and refine.</mark>
        </Reveal>
      </Section>

      <Section>
        <Reveal className="rounded-[32px] bg-cobalt p-[clamp(28px,6vw,72px)] text-white">
          <h2 className="mb-6 font-sans text-[clamp(40px,7vw,96px)] font-extrabold leading-[.98] tracking-[-.04em]">
            Have a project in mind?
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="block break-all font-sans text-[clamp(28px,5.5vw,68px)] font-extrabold leading-[1.05] tracking-[-.03em] underline decoration-tang decoration-4 underline-offset-4 hover:decoration-[6px]"
          >
            {EMAIL}
          </a>
        </Reveal>
      </Section>
    </>
  );
}
