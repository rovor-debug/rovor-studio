import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="home-editorial">
        <section className="home-hero" id="home">
          <div className="home-hero__image" aria-hidden="true" />
          <div className="home-hero__shade" aria-hidden="true" />
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">ARCHITECTURE STUDIO</p>
            <h1>Architecture<br />Beyond <em>Time</em></h1>
            <p className="home-hero__intro">ROVOR is an architecture studio dedicated to creating timeless spaces, where design meets life.</p>
            <a className="home-hero__link" href="/work">EXPLORE OUR WORK <span>↗</span></a>
          </div>
          <span className="home-hero__caption">SPACE / LIGHT / MATERIAL</span>
        </section>

        <section className="home-contact-band" id="films" aria-label="Films and contact">
          <div className="home-films-copy">
            <p className="home-band__eyebrow">FILMS / MOVING IMAGE</p>
            <h2>Architecture in motion.</h2>
            <span className="home-band__rule" />
            <p className="home-band__description">A visual journey through space,<br />material and atmosphere.</p>
            <a className="home-band__link" href="/work">WATCH FILMS <span>↗</span></a>
          </div>
          <a className="home-film-still" href="/work" aria-label="Explore ROVOR films">
            <span className="home-film-still__play" aria-hidden="true">▷</span>
            <span className="home-film-still__label">ROVOR / VISUAL STUDY 001</span>
          </a>
          <aside className="home-connect" id="contact">
            <p className="home-band__eyebrow">LET’S CONNECT</p>
            <a href="mailto:Gp.rovor@gmail.com"><span>✉</span>Gp.rovor@gmail.com</a>
            <a href="https://wa.me/989114710094" target="_blank" rel="noreferrer"><span>◉</span>+98 911 471 0094</a>
            <a href="https://instagram.com/rovor__architecture_studio" target="_blank" rel="noreferrer"><span>◎</span>@rovor__architecture_studio</a>
            <a href="https://www.linkedin.com/in/asro4" target="_blank" rel="noreferrer"><span>in</span>linkedin.com/in/asro4</a>
            <div className="home-connect__follow"><span>FOLLOW US</span><a href="https://instagram.com/rovor__architecture_studio" target="_blank" rel="noreferrer">◎</a><a href="https://www.linkedin.com/in/asro4" target="_blank" rel="noreferrer">in</a></div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
