"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/LogoMark";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/rovor__architecture_studio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asro4" },
];

export default function Footer() {
  const pathname = usePathname();
  const isFa = pathname === "/fa" || pathname.startsWith("/fa/");
  const prefix = isFa ? "/fa" : "";
  return (
    <footer className={`footer${isFa ? " footer--fa" : ""}`}>
      <div className="footer__top">
        <LogoMark className="footer__brand" href={prefix || "/"} />
        <span>{isFa ? "معماری فراتر از زمان." : "Architecture beyond time."}</span>
        <Link href={`${prefix}/contact`}> {isFa ? "شروع گفتگو ↗" : "Start a conversation ↗"}</Link>
      </div>
      <div className="footer__bottom">
        <span>{isFa ? "مستقر در ایران · استودیوی مستقل معماری و طراحی فضا" : "Based in Iran · Independent architecture & spatial design."}</span>
        <span>© {new Date().getFullYear()} ROVOR Studio</span>
        <span className="footer__socials">{socialLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a>)}</span>
        <a href="mailto:Gp.rovor@gmail.com">Gp.rovor@gmail.com</a>
      </div>
    </footer>
  );
}
