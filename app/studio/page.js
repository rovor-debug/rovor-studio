import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "The Studio",
  description: "Discover ROVOR's architectural point of view, design principles, and approach to creating thoughtful spaces.",
};

const principles = [
  ["01", "Context before form", "Every project begins by understanding its setting, its people, and the conditions that give it meaning."],
  ["02", "Clarity over excess", "We look for the essential idea and let proportion, material, and light do the work."],
  ["03", "Details with purpose", "The smallest decisions matter when they contribute to a coherent architectural experience."],
];

const stages = [
  ["01", "Listen & understand", "We define the brief, priorities, constraints, and the questions a project needs to answer."],
  ["02", "Explore & articulate", "We develop spatial concepts, test alternatives, and establish a clear design direction."],
  ["03", "Resolve & communicate", "We refine the architecture through drawings, material studies, and considered visual communication."],
];

export default function StudioPage() {
  return (
    <StudioExperience>
      <Navbar />
      <main className="studio-page">
        <section className="studio-hero">
          <div className="studio-hero__image" />
          <div className="studio-hero__veil" />
          <div className="studio-hero__content">
            <p className="eyebrow">ROVOR / The studio</p>
            <h1>Architecture<br />with <em>intention.</em></h1>
            <p>We shape spaces through a considered relationship between context, material, proportion, and light.</p>
          </div>
          <span className="studio-hero__index">A POINT OF VIEW / 01</span>
        </section>

        <section className="studio-manifesto section-wrap">
          <div className="section-kicker"><span>01</span><span>Who we are</span></div>
          <div className="studio-manifesto__grid">
            <Reveal><p className="intro__overline">An independent architecture & spatial design studio</p><h2>Design is not an image.<br />It is an experience that<br /><em>stays with you.</em></h2></Reveal>
            <Reveal delay={120}>
              <p>ROVOR is an independent architecture and spatial design practice exploring how spaces can feel clear, grounded, and enduring. We work across scales, from architectural concepts to interior environments, with an emphasis on the relationship between people and place.</p>
              <p>Our approach is research-led and detail-conscious. Rather than following a fixed style, we seek the character already present in each brief and give it a precise spatial expression.</p>
            </Reveal>
          </div>
        </section>

        <section className="studio-principles">
          <div className="studio-principles__head">
            <div className="section-kicker section-kicker--light"><span>02</span><span>What guides us</span></div>
            <h2>Fewer gestures.<br /><em>Stronger meaning.</em></h2>
          </div>
          <div className="studio-principles__list">
            {principles.map(([number, title, description]) => <article className="studio-principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b>↗</b></article>)}
          </div>
        </section>

        <section className="studio-process section-wrap">
          <div className="section-kicker"><span>03</span><span>How we work</span></div>
          <div className="studio-process__heading"><h2>A clear process.<br /><em>Room to explore.</em></h2><p>Good work comes from asking the right questions, testing ideas with care, and making each decision count.</p></div>
          <div className="studio-process__stages">
            {stages.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </section>

        <section className="studio-services">
          <div className="studio-services__image" />
          <div className="studio-services__content">
            <div className="section-kicker section-kicker--light"><span>04</span><span>Areas of exploration</span></div>
            <h2>One point of view.<br /><em>Different scales.</em></h2>
            <ul><li>Architecture & building design</li><li>Interior architecture</li><li>Spatial concepts & strategy</li><li>3D visualization & design communication</li></ul>
            <p>Each collaboration is shaped around the project’s needs, scope, and context.</p>
          </div>
        </section>

        <section className="studio-contact section-wrap">
          <p className="eyebrow">05 / Begin a collaboration</p>
          <h2>Have a space<br />in <em>mind?</em></h2>
          <Link className="text-link" href="/#contact">Tell us about your project <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
