import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <StudioExperience>
      <Navbar />
      <main>
        <section className="hero" id="home">
          <div className="hero__image" aria-hidden="true" />
          <video className="hero__video" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90" aria-hidden="true"><source src="https://videos.pexels.com/video-files/6076828/6076828-uhd_3840_2160_30fps.mp4" type="video/mp4" /></video>
          <div className="hero__veil" />
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">Independent architecture studio</p>
            <h1>Architecture<br /><em>beyond time.</em></h1>
            <div className="hero__bottom">
              <p>We shape thoughtful spaces through the quiet balance of context, material, and light.</p>
              <a className="text-link text-link--light" href="#work">Explore selected work <span>↘</span></a>
            </div>
          </div>
          <span className="hero__index">01 — 03 / ROVOR STUDIO</span>
          <span className="hero__scroll">SCROLL TO EXPLORE <i /></span>
        </section>

        <section className="intro section-wrap" id="studio">
          <div className="section-kicker"><span>01</span><span>Studio / Perspective</span></div>
          <div className="intro__body">
            <Reveal><h2>Architecture is more than form. It is the art of <em>making space matter.</em></h2></Reveal>
            <Reveal delay={120} className="intro__note">
              <p>ROVOR is an independent architecture and spatial design studio working across scales, from the intimacy of an interior to the wider context of the city.</p>
              <a className="text-link" href="#contact">Discover our approach <span>↘</span></a>
            </Reveal>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div className="section-kicker"><span>02</span><span>Selected work</span></div>
            <p className="section-heading__aside">A selection of explorations<br />in space, light, and material.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <Reveal key={project.slug} delay={index * 90}><ProjectCard project={{...project, className: index === 0 ? "project-card--wide" : ""}} /></Reveal>)}
          </div>
        </section>

        <section className="statement">
          <div className="statement__inner">
            <p className="eyebrow">03 / Our approach</p>
            <h2>Less, but with<br /><em>intention.</em></h2>
            <p className="statement__copy">We believe thoughtful architecture begins with careful observation: of context, material, light, and the everyday rituals that give a place its life.</p>
          </div>
          <span className="statement__mark">R.</span>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker"><span>04</span><span>Start a conversation</span></div>
          <div className="contact__body">
            <h2>Have a place<br />in mind?</h2>
            <a className="contact__email" href="mailto:hello@rovor.studio">hello@rovor.studio <span>↗</span></a>
            <p>For collaborations, project enquiries, and thoughtful conversations.</p>
          </div>
        </section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
