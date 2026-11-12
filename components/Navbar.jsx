"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <LogoMark className="wordmark" href="/" />
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label="Toggle navigation">
        <span>{open ? "Close" : "Menu"}</span><i />
      </button>
      <nav id="primary-navigation" aria-label="Primary navigation" className={open ? "nav-links nav-links--open" : "nav-links"}>
        <Link href="/studio" onClick={closeMenu}>Studio</Link>
        <Link href="/work" onClick={closeMenu}>Work</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
      <span className="navbar__meta">Architecture / Spatial Design</span>
    </header>
  );
}
