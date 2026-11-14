"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") closeMenu();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="navbar">
        <LogoMark className="wordmark" href="/" />
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
          <span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" />
        </button>
        <nav id="primary-navigation" aria-label="Primary navigation" className={open ? "nav-links nav-links--open" : "nav-links"}>
          <Link href="/studio" onClick={closeMenu}>Studio</Link>
          <Link href="/work" onClick={closeMenu}>Work</Link>
          <Link href="/#films" onClick={closeMenu}>Films</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
        <span className="navbar__meta">Architecture / Spatial Design</span>
      </header>
    </>
  );
}
