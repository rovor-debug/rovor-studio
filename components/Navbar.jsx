"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="wordmark" href="#home" aria-label="ROVOR home">ROVOR<span>®</span></a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        <span>{open ? "Close" : "Menu"}</span><i />
      </button>
      <nav className={open ? "nav-links nav-links--open" : "nav-links"}>
        <a href="#studio" onClick={() => setOpen(false)}>Studio</a>
        <a href="#work" onClick={() => setOpen(false)}>Work</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>
      <span className="navbar__meta">Architecture / Spatial Design</span>
    </header>
  );
}
