import Link from "next/link";

const imageFallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'%3E%3Crect width='1200' height='900' fill='%23232621'/%3E%3Cpath d='M0 680 380 390l210 150 250-270 360 300v330H0Z' fill='%233b3d35'/%3E%3Cpath d='M120 700V350l420-170v520M540 350l340-130v480' fill='none' stroke='%23b08d57' stroke-width='3' opacity='.7'/%3E%3Cpath d='M0 760h1200' stroke='%23b08d57' stroke-width='2' opacity='.45'/%3E%3C/svg%3E";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className || ""}`}>
      <Link className="project-card__image-wrap" href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <img
          src={project.image}
          alt={`${project.title} — architectural project`}
          className="project-card__image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = imageFallback;
          }}
        />
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
