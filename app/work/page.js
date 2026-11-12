import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Selected Work",
  description: "Explore architectural concepts, spatial studies, and material research by ROVOR Architecture Studio.",
};

export default function WorkPage() {
  return (
    <StudioExperience>
      <Navbar />
      <main className="work-page">
        <section className="work-page__intro section-wrap">
          <p className="eyebrow">ROVOR / Selected work</p>
          <h1>Ideas taking<br /><em>form.</em></h1>
          <p>A collection of architectural concepts and visual explorations across space, light, and material.</p>
          <span className="work-page__count">0{projects.length} / PROJECTS & STUDIES</span>
        </section>
        <section className="work-page__grid section-wrap">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <ProjectCard project={{ ...project, className: index === 0 ? "project-card--wide" : "" }} />
            </Reveal>
          ))}
        </section>
        <section className="work-page__note section-wrap">
          <p>Every project begins with a question. Each study is an invitation to look closer.</p>
          <Link href="/contact" className="text-link">Discuss a project <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
