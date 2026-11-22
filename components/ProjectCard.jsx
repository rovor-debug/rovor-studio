"use client";

import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className || ""}`}>
      <Link className="project-card__image-wrap" href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <ProjectImage
          src={project.image}
          alt={project.imageAlt || `${project.title} — architectural concept study`}
          className="project-card__image"
          sizes="(max-width: 760px) 100vw, 50vw"
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
