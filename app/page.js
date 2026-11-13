import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const services = [
  ["01", "Architecture", "Residential, cultural and commercial spaces shaped by context."],
  ["02", "Interior architecture", "Atmospheric interiors with a clear material language."],
  ["03", "Spatial strategy", "Research, concept design and spatial identity."],
  ["04", "Visualization", "Visual narratives that make ideas tangible."],
];

export default function Home() {
  return (
    <StudioExperience>
      <Navbar />
      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero__image" aria-hidden="true" />
          <video className="hero__video" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90" aria-hidden="true">
            <source src="https://videos.pexels.com/video-files/6076828/6076828-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero__veil" />
          <div className="hero__topline"><span>Independent architecture studio</span><span>Independent practice · Concept & collaboration</span></div>
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">ROVOR / Architecture & spatial design</p>
            <h1>Space<br /><em>with a point</em><br />of view<span className="hero__period">.</span></h1>
            <div className="hero__bottom">
              <p>We create considered spaces with a distinct point of view — grounded in context, shaped by material, and alive with light.</p>
              <a className="hero__link" href="#work"><span>Explore selected work</span><b>↘</b></a>
            </div>
          </div>
          <div className="hero__vertical">SPACE / MATERIAL / LIGHT</div>
          <span className="hero__index">01 / 04</span>
          <a className="hero__scroll" href="#studio"><span>Scroll to discover</span><i /></a>
        </section>

        <div className="ticker" aria-label="ROVOR architecture and spatial design">
          <div className="ticker__track"><span>Architecture</span><i>✳</i><span>Interiors</span><i>✳</i><span>Spatial identity</span><i>✳</i><span>Objects & atmosphere</span><i>✳</i><span>Architecture</span><i>✳</i><span>Interiors</span><i>✳</i><span>Spatial identity</span><i>✳</i><span>Objects & atmosphere</span><i>✳</i></div>
        </div>

        <section className="intro section-wrap" id="studio">
          <div className="section-kicker"><span>01</span><span>The studio</span><i /></div>
          <div className="intro__body">
            <Reveal><h2>We believe the best spaces don’t ask for attention. <em>They earn it.</em></h2></Reveal>
            <Reveal delay={140} className="intro__note">
              <span className="intro__note-index">A considered approach to making.</span>
              <p>ROVOR is an independent architecture and spatial design studio. We work across scales to create places that feel clear, meaningful and enduring — where every line, surface and opening has a reason to exist.</p>
              <a className="text-link" href="#approach">How we think <span>↗</span></a>
            </Reveal>
          </div>
          <div className="intro__graphic" aria-hidden="true"><span>R</span><i /><b>FORM FOLLOWS FEELING</b></div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div><div className="section-kicker"><span>02</span><span>Selected work</span><i /></div><h2 className="section-title">Spaces that<br /><em>stay with you.</em></h2></div>
            <p className="section-heading__aside">A curated selection of<br />architectural concept studies<br /><span>SPACE / LIGHT / MATERIAL</span></p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <Reveal key={project.slug} delay={index * 100} className={index === 0 ? "project-reveal project-reveal--large" : "project-reveal"}><ProjectCard project={{...project, className: index === 0 ? "project-card--wide" : ""}} /></Reveal>)}
          </div>
          <div className="work__foot"><span>01 — 03 / Concept studies</span><a className="text-link" href="#contact">Discuss a project <span>↗</span></a></div>
        </section>

        <section className="manifesto" id="approach">
          <div className="manifesto__grain" aria-hidden="true" />
          <div className="manifesto__top"><span>03 / Our point of view</span><span>Less noise. More meaning.</span></div>
          <Reveal className="manifesto__content"><p className="eyebrow">A design philosophy</p><h2>Not just<br />how it <em>looks.</em><br />How it <em>lives.</em></h2></Reveal>
          <div className="manifesto__bottom"><p>Architecture is experienced over time. In the way light moves, materials age, and people make a place their own.</p><span>ROVOR STUDIO — 2026</span></div>
          <div className="manifesto__orb" aria-hidden="true" />
        </section>

        <section className="services section-wrap" id="expertise">
          <div className="section-heading services__heading">
            <div><div className="section-kicker"><span>04</span><span>What we do</span><i /></div><h2 className="section-title">Ideas into<br /><em>experience.</em></h2></div>
            <p className="section-heading__aside">From first question to final detail,<br />we connect concept and craft.</p>
          </div>
          <div className="service-list">{services.map(([number, title, copy]) => <Reveal key={number} className="service-row"><span className="service-row__number">{number}</span><h3>{title}</h3><p>{copy}</p><span className="service-row__arrow">↗</span></Reveal>)}</div>
        </section>

        <section className="approach">
          <div className="approach__image" role="img" aria-label="Architectural material and light study" />
          <div className="approach__content"><p className="eyebrow">05 / The process</p><h2>Clarity at<br />every <em>scale.</em></h2><p className="approach__copy">Good work comes from asking better questions. We listen, investigate, test and refine — keeping the original idea alive through every decision.</p><a className="text-link text-link--light" href="#contact">Start a conversation <span>↗</span></a><span className="approach__stamp">OBSERVE<br />IMAGINE<br />MAKE</span></div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker"><span>06</span><span>Start a conversation</span><i /></div>
          <div className="contact__body"><p className="eyebrow">Have a project in mind?</p><h2>Let’s make<br /><em>room for it.</em></h2><div className="contact__action"><a className="contact__email" href="/contact">Project enquiries <span>↗</span></a><p>For collaborations, project enquiries and thoughtful conversations.</p></div></div>
          <div className="contact__bottom"><span>Architecture / Interiors / Spatial design</span><span>Based everywhere. Working worldwide.</span></div>
        </section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
