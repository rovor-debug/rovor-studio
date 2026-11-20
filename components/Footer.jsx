import Link from "next/link";
import LogoMark from "@/components/LogoMark";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/rovor__architecture_studio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asro4" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <LogoMark className="footer__brand" href="/" />
        <span>Architecture beyond time.</span>
        <Link href="/contact">Start a conversation ↗</Link>
      </div>
      <div className="footer__bottom">
        <span>Independent architecture & spatial design studio.</span>
        <span>© {new Date().getFullYear()} ROVOR Studio</span>
        <span className="footer__socials">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a>
          ))}
        </span>
        <a href="mailto:Gp.rovor@gmail.com">Gp.rovor@gmail.com</a>
      </div>
    </footer>
  );
}
