import ProjectCard from '../components/ProjectCard.jsx';
import { pageTitle } from '../components/ui.jsx';
import { projects } from '../data.js';

export default function Work() {
  return (
    <>
      <h1 tabIndex={-1} className={pageTitle}>Work</h1>
      <div className="grid gap-14">{projects.slice(0, 2).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
      {projects.length > 2 && (
        <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2">{projects.slice(2).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
      )}
    </>
  );
}
