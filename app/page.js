import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const disciplines = [
  ["01", "Architecture", "Buildings shaped by place, purpose, and permanence."],
  ["02", "Interior spaces", "Atmospheric environments with a tactile point of view."],
  ["03", "Spatial strategy", "Clear concepts translated into meaningful experiences."],
];

export default function Home() {
  return (
    <StudioExperience>
      <Navbar />
      <main>
        <section className="hero hero--editorial" id="home">
          <div className="hero__image" aria-hidden="true" />
          <div className="hero__veil" />
          <div className="hero__topline"><span>Independent architecture studio</span><span>Available for select collaborations · 2026</span></div>
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">ROVOR / Architecture & spatial design</p>
            <h1>Spaces with<br /><em>a point of view.</em></h1>
            <div className="hero__bottom">
              <p>We create considered architecture where context, material and light become one coherent experience.</p>
              <a className="hero__cta" href="#work"><span>Discover our work</span><b>↘</b></a>
            </div>
          </div>
          <div className="hero__side-note">FORM FOLLOWS FEELING</div>
          <span className="hero__index">01 — 03 / ROVOR STUDIO</span>
          <span className="hero__scroll">SCROLL TO EXPLORE <i /></span>
        </section>

        <div className="marquee" aria-label="Architecture beyond time">
          <div className="marquee__track"><span>ARCHITECTURE BEYOND TIME</span><i>✳</i><span>SPACES THAT STAY WITH YOU</span><i>✳</i><span>ARCHITECTURE BEYOND TIME</span><i>✳</i><span>SPACES THAT STAY WITH YOU</span><i>✳</i></div>
        </div>

        <section className="intro section-wrap" id="studio">
          <div className="section-kicker"><span>01</span><span>The studio / Point of view</span></div>
          <div className="intro__body">
            <Reveal><p className="intro__overline">A thoughtful approach to the built environment.</p><h2>Not simply spaces.<br />A lasting sense of <em>place.</em></h2></Reveal>
            <Reveal delay={120} className="intro__note">
              <p>ROVOR is an independent architecture and spatial design studio. We work across scales, bringing a precise eye to proportion, atmosphere and the details that make a space feel inevitable.</p>
              <a className="text-link" href="#approach">Our philosophy <span>↘</span></a>
            </Reveal>
          </div>
          <div className="intro__coordinates"><span>DESIGN WITH INTENTION</span><span>01 / 04</span></div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div><div className="section-kicker"><span>02</span><span>Selected work</span></div><h2 className="section-title">Ideas taking <em>form.</em></h2></div>
            <p className="section-heading__aside">A collection of explorations<br />in space, light and material.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <Reveal key={project.slug} delay={index * 90}><ProjectCard project={{...project, className: index === 0 ? "project-card--wide" : ""}} /></Reveal>)}
          </div>
          <div className="work__foot"><span>CONCEPTS / RESEARCH / SPATIAL STUDIES</span><span>SCROLL TO EXPLORE ALL PROJECTS ↘</span></div>
        </section>

        <section className="discipline-section" id="approach">
          <div className="discipline-section__visual"><div className="discipline-section__image" /><span className="discipline-section__stamp">R / 26</span><span className="discipline-section__caption">MATERIAL · LIGHT · PROPORTION</span></div>
          <div className="discipline-section__content">
            <div className="section-kicker section-kicker--light"><span>03</span><span>What we do</span></div>
            <p className="discipline-section__lead">One studio.<br /><em>Many scales.</em></p>
            <p className="discipline-section__text">From the first spatial idea to the atmosphere of a finished room, every decision is part of a larger architectural story.</p>
            <div className="discipline-list">{disciplines.map(([number, title, description]) => <div className="discipline-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b>↗</b></div>)}</div>
          </div>
        </section>

        <section className="statement statement--new">
          <div className="statement__inner">
            <p className="eyebrow">04 / The ROVOR perspective</p>
            <h2>Less noise.<br /><em>More meaning.</em></h2>
            <p className="statement__copy">We believe the most compelling spaces are not defined by excess, but by clarity: a strong idea, honest materials and light that gives every moment its character.</p>
            <a className="text-link text-link--light" href="#contact">Start a conversation <span>↗</span></a>
          </div>
          <span className="statement__mark">R.</span>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker"><span>05</span><span>Start a conversation</span></div>
          <div className="contact__body">
            <div><p className="contact__overline">Have a project in mind?</p><h2>Let's make<br /><em>it matter.</em></h2></div>
            <div className="contact__details"><a className="contact__email" href="mailto:Gp.rovor@gmail.com">Gp.rovor@gmail.com <span>↗</span></a><p>For collaborations, project enquiries, and thoughtful conversations.</p><span className="contact__availability"><i /> OPEN TO SELECT PROJECTS</span></div>
          </div>
        </section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
