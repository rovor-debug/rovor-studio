import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.title} — ROVOR` : "Selected Work — ROVOR",
    description: project?.description || "Selected architecture work by ROVOR Studio.",
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <StudioExperience>
        <Navbar />
        <main className="not-found">
          <p className="eyebrow">404 / Project not found</p>
          <h1>This space<br /><em>is still undefined.</em></h1>
          <Link className="text-link" href="/#work">Return to selected work ↗</Link>
        </main>
        <Footer />
      </StudioExperience>
    );
  }

  const nextProject = projects[(index + 1) % projects.length];

  return (
    <StudioExperience>
      <Navbar />
      <main className="project-detail">
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

        <section className="project-detail__gallery">
          <Reveal className="project-detail__gallery-main">
            <img src={project.gallery[0]} alt={`${project.title} — architectural view`} />
          </Reveal>
          <div className="project-detail__gallery-caption">
            <span>02 / Spatial studies</span>
            <p>Light, material, and the experience of space.</p>
          </div>
          <Reveal className="project-detail__gallery-secondary" delay={100}>
            <img src={project.gallery[1]} alt={`${project.title} — material and interior study`} />
          </Reveal>
        </section>

        <section className="project-detail__closing section-wrap">
          <p className="eyebrow">Continue exploring</p>
          <Link href={`/projects/${nextProject.slug}`} className="next-project">
            <span><small>Next project / {nextProject.number}</small><strong>{nextProject.title}</strong></span>
            <span className="next-project__arrow">↗</span>
          </Link>
          <Link href="/#work" className="text-link">All selected work <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
