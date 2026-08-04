export default function ProjectCard({ project }) {
  return (
    <article className="group">

      <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <h2 className="text-xl tracking-wide">
        {project.title}
      </h2>

      <p className="mt-2 text-gray-500">
        {project.location} — {project.year}
      </p>

      <p className="text-sm text-gray-400 mt-1">
        {project.type} / {project.status}
      </p>

    </article>
  );
}
