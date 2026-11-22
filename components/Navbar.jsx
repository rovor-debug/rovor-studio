"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/LogoMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isFa = pathname === "/fa" || pathname.startsWith("/fa/");
  const prefix = isFa ? "/fa" : "";
  const languageHref = isFa ? (pathname.replace(/^\\/fa(?=\\/|$)/, "") || "/") : (pathname === "/" ? "/fa" : `/fa${pathname}`);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") closeMenu();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const links = isFa
    ? [["استودیو", "/fa/studio"], ["پروژه‌ها", "/fa/work"], ["تماس", "/fa/contact"]]
    : [["Studio", "/studio"], ["Work", "/work"], ["Films", "/#films"], ["Contact", "/contact"]];

  return (
    <>
      <a className="skip-link" href="#main-content">{isFa ? "رفتن به محتوای اصلی" : "Skip to content"}</a>
      <header className={`navbar${isFa ? " navbar--fa" : ""}`}>
        <LogoMark className="wordmark" href={prefix || "/"} />
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? (isFa ? "بستن منو" : "Close navigation menu") : (isFa ? "باز کردن منو" : "Open navigation menu")}>
          <span>{open ? (isFa ? "بستن" : "Close") : (isFa ? "منو" : "Menu")}</span><i aria-hidden="true" />
        </button>
        <nav id="primary-navigation" aria-label="Primary navigation" className={open ? "nav-links nav-links--open" : "nav-links"}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu}>{label}</Link>)}
        </nav>
        <Link className="language-switch" href={languageHref} aria-label={isFa ? "Switch to English" : "تغییر زبان به فارسی"}>{isFa ? "EN" : "فا"}</Link>
        <span className="navbar__meta">{isFa ? "مستقر در ایران · همکاری بین‌المللی" : <>Based in Iran <i>·</i> Working worldwide</>}</span>
      </header>
    </>
  );
}
