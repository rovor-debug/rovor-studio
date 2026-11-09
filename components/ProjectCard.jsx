export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className || ""}`}>
      <a className="project-card__image-wrap" href="#contact" aria-label={`Enquire about ${project.title}`}>
        <img src={project.image} alt="" className="project-card__image" />
        <span className="project-card__arrow">↗</span>
      </a>
      <div className="project-card__info">
        <div>
          <p className="project-card__number">{project.number} / {project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-card__year">{project.year}</span>
      </div>
    </article>
  );
}
