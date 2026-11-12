import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer className="footer">
      <LogoMark className="footer__brand" href="/" />
      <p>Independent architecture<br />& spatial design studio.</p>
      <div className="footer__right">
        <Link href="/contact">Get in touch ↗</Link>
        <span>© {new Date().getFullYear()} ROVOR Studio</span>
      </div>
    </footer>
  );
}
