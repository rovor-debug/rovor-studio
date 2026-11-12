"use client";

import { useState } from "react";
import LogoMark from "@/components/LogoMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="navbar">
      <LogoMark className="wordmark" href="/#home" />
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        <span>{open ? "Close" : "Menu"}</span><i /><i />
      </button>
      <nav className={open ? "nav-links nav-links--open" : "nav-links"}>
        <a href="/#studio" onClick={close}>Studio</a>
        <a href="/#work" onClick={close}>Selected work</a>
        <a href="/#expertise" onClick={close}>Expertise</a>
        <a href="/#contact" onClick={close}>Contact <span>↗</span></a>
      </nav>
      <span className="navbar__meta">Independent by design <i>✳</i></span>
    </header>
  );
}
