import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const projects = [
  {
    number: "01",
    title: "House on the Slope",
    type: "Residential · Concept",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    className: "project-card--wide",
  },
  {
    number: "02",
    title: "Quiet Courtyard",
    type: "Residential · Interior",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "The Material Study",
    type: "Research · Installation",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="home">
          <div className="hero__image" aria-hidden="true" />
          <div className="hero__veil" />
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">Independent architecture studio</p>
            <h1>Spaces shaped<br />by <em>meaning.</em></h1>
            <div className="hero__bottom">
              <p>We explore the relationship between people, place, and the built environment.</p>
              <a className="text-link text-link--light" href="#work">Explore selected work <span>↘</span></a>
            </div>
          </div>
          <span className="hero__index">01 — 03 / ROVOR STUDIO</span>
        </section>

        <section className="intro section-wrap" id="studio">
          <div className="section-kicker"><span>01</span><span>Studio / Perspective</span></div>
          <div className="intro__body">
            <h2>Architecture is more than form. It is the art of <em>making space matter.</em></h2>
            <div className="intro__note">
              <p>ROVOR is an independent architecture and spatial design studio working across scales, from the intimacy of an interior to the wider context of the city.</p>
              <a className="text-link" href="#contact">Discover our approach <span>↘</span></a>
            </div>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div className="section-kicker"><span>02</span><span>Selected work</span></div>
            <p className="section-heading__aside">A selection of explorations<br />in space, light, and material.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
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
    </>
  );
}
