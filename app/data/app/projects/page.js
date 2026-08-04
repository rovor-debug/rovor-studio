import projects from "@/data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen bg-white px-6 py-32">

      <h1 className="text-5xl font-light tracking-widest mb-16">
        PROJECTS
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project) => (
          <article key={project.title}>

            <div className="aspect-[4/3] bg-gray-100 mb-6 flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                Project Image
              </span>
            </div>

            <h2 className="text-xl tracking-wider">
              {project.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {project.location} — {project.year}
            </p>

            <p className="text-gray-400 text-sm mt-1">
              {project.type} / {project.status}
            </p>

          </article>
        ))}

      </div>

    </main>
  );
}
