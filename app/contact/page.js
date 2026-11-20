import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";

const email = "Gp.rovor@gmail.com";
const whatsapp = "989114710094";
const instagram = "https://instagram.com/rovor__architecture_studio";
const linkedin = "https://www.linkedin.com/in/asro4";

export const metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description: "Contact ROVOR Architecture Studio about architectural design, spatial projects, and collaborations.",
};

export default function ContactPage() {
  const subject = encodeURIComponent("Project enquiry — ROVOR");
  const body = encodeURIComponent("Hello ROVOR,\n\nI would like to discuss a project.\n\nProject type:\nLocation:\nBrief description:\nTimeline:\n\nBest regards,");
  return (
    <StudioExperience>
      <Navbar />
      <main id="main-content" className="contact-page">
        <section className="contact-page__hero section-wrap">
          <p className="eyebrow">ROVOR / Contact</p>
          <h1>Every good project<br />starts with a <em>conversation.</em></h1>
          <p className="contact-page__intro">For collaborations, architectural enquiries, and thoughtful conversations, get in touch.</p>
        </section>
        <section className="contact-page__details section-wrap">
          <div>
            <span>Direct enquiries</span>
            <a href={`mailto:${email}?subject=${subject}&body=${body}`}>{email} ↗</a>
            <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello ROVOR, I would like to discuss a project.")}`} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
          <div>
            <span>Follow & connect</span>
            <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn · Personal ↗</a>
          </div>
          <div>
            <span>What to include</span>
            <p>A short description of your project, its location, the type of support you are looking for, and your anticipated timeline.</p>
          </div>
        </section>
        <section className="contact-page__closing section-wrap">
          <span>ROVOR / ARCHITECTURE & SPATIAL DESIGN</span>
          <Link href="/work" className="text-link">Explore selected work <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
