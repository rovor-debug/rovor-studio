import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className || ""}`}>
      <Link className="project-card__image-wrap" href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <img src={project.image} alt={`${project.title} — architectural project`} className="project-card__image" loading="lazy" />
        <span className="project-card__arrow">↗</span>
        <span className="project-card__view">View project</span>
      </Link>
      <div className="project-card__info">
        <div>
          <p className="project-card__number">{project.number} / {project.type}</p>
          <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        </div>
        <span className="project-card__year">{project.year}</span>
      </div>
    </article>
  );
}
