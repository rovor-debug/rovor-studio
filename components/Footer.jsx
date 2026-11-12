import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top"><LogoMark className="footer__brand" href="/#home" /><span>Architecture with intention.</span><a href="/#home">Back to top ↑</a></div>
      <div className="footer__bottom"><span>Independent architecture & spatial design studio.</span><span>© {new Date().getFullYear()} ROVOR Studio</span><a href="mailto:hello@rovor.studio">hello@rovor.studio ↗</a></div>
    </footer>
  );
}
