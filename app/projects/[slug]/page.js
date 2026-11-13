import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";
import Reveal from "@/components/Reveal";
import ConceptDiagram from "@/components/ConceptDiagram";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? project.title : "Selected Work",
    description: project?.description || "Selected architecture work by ROVOR Studio.",
    alternates: project ? { canonical: `/projects/${project.slug}` } : undefined,
    openGraph: project ? { title: `${project.title} — ROVOR`, description: project.description, images: [project.image] } : undefined,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const nextProject = projects[(index + 1) % projects.length];

  return (
    <StudioExperience>
      <Navbar />
      <main id="main-content" className="project-detail">
        <section className="project-detail__hero">
          <div className="project-detail__hero-image" style={{ backgroundImage: `url("${project.image}")` }} />
          <div className="project-detail__hero-veil" />
          <div className="project-detail__hero-content">
            <p className="eyebrow">{project.number} / {project.type}</p>
            <h1>{project.title}</h1>
            <p className="project-detail__hero-description">{project.description}</p>
          </div>
          <span className="project-detail__hero-index">{project.year} — ROVOR STUDIO</span>
        </section>

        <section className="project-detail__overview section-wrap">
          <div className="section-kicker"><span>01</span><span>Project overview</span></div>
          <div className="project-detail__overview-grid">
            <Reveal><h2>Space shaped by<br /><em>intention.</em></h2></Reveal>
            <Reveal delay={120}>
              <p>{project.concept}</p>
              <div className="project-facts">
                <div><span>Year</span><strong>{project.year}</strong></div>
                <div><span>Type</span><strong>{project.type}</strong></div>
                <div><span>Location</span><strong>{project.location}</strong></div>
                <div><span>Materials</span><strong>{project.materials}</strong></div>
                <div><span>Status</span><strong>{project.status}</strong></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="project-detail__intent section-wrap">
          <div className="section-kicker"><span>02</span><span>Design intent</span></div>
          <div className="project-detail__intent-grid">
            <Reveal><h2>Start with<br /><em>a question.</em></h2></Reveal>
            <Reveal delay={100}><p>{project.designIntent}</p></Reveal>
          </div>
          <div className="project-detail__moves">
            {project.designMoves.map(([number, title, description]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className="project-detail__diagram section-wrap">
          <div className="section-kicker"><span>03</span><span>Spatial thinking</span></div>
          <div className="project-detail__diagram-grid">
            <div><h2>Ideas into<br /><em>relationships.</em></h2><p>{project.spatialStrategy}</p></div>
            <figure className="concept-diagram">
              <ConceptDiagram type={project.diagram} />
              <figcaption><span>{project.diagramCaption}</span><small>ILLUSTRATIVE CONCEPT DIAGRAM / NOT TO SCALE</small></figcaption>
            </figure>
          </div>
        </section>

        <section className="project-detail__gallery">
          <Reveal className="project-detail__gallery-main">
            <img src={project.gallery[0]} alt={`${project.title} — architectural visual study`} />
          </Reveal>
          <div className="project-detail__gallery-caption">
            <span>04 / Visual studies</span>
            <p>Material, light, and the experience of space.</p>
          </div>
          <Reveal className="project-detail__gallery-secondary" delay={100}>
            <img src={project.gallery[1]} alt={`${project.title} — material and spatial atmosphere`} />
          </Reveal>
        </section>

        <section className="project-detail__closing section-wrap">
          <p className="eyebrow">Continue exploring</p>
          <Link href={`/projects/${nextProject.slug}`} className="next-project">
            <span><small>Next project / {nextProject.number}</small><strong>{nextProject.title}</strong></span>
            <span className="next-project__arrow">↗</span>
          </Link>
          <Link href="/work" className="text-link">All selected work <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
