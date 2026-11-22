"use client";

import { useState } from "react";

export default function SpatialObject() {
  const [rotation, setRotation] = useState({ x: -12, y: -24 });

  function handlePointerMove(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setRotation({ x: -12 + y * 10, y: -24 + x * 16 });
  }

  function resetView() {
    setRotation({ x: -12, y: -24 });
  }

  return (
    <section className="spatial-object section-wrap" aria-labelledby="spatial-object-title">
      <div className="section-kicker"><span>02</span><span>Form study / 001</span><i /></div>
      <div className="spatial-object__layout">
        <div className="spatial-object__copy">
          <p className="eyebrow">A study in mass, void & light</p>
          <h2 id="spatial-object-title">An idea<br />in <em>three dimensions.</em></h2>
          <p className="spatial-object__description">Architecture begins as a relationship between solid and empty space. This digital pavilion explores a quiet balance of weight, transparency and shadow.</p>
          <div className="spatial-object__meta"><span>ROVOR / DIGITAL STUDY</span><span>01 — 03</span></div>
        </div>
        <div className="spatial-object__stage" onPointerMove={handlePointerMove} onPointerLeave={resetView} onPointerUp={resetView} role="img" aria-label="Interactive three-dimensional architectural pavilion model made of stone planes and glass walls">
          <div className="spatial-object__stage-label"><span>INTERACTIVE MODEL</span><span>MOVE TO EXPLORE ↗</span></div>
          <div className="spatial-object__ground-grid" aria-hidden="true" />
          <div className="spatial-object__model-wrap" style={{ "--model-x": `${rotation.x}deg`, "--model-y": `${rotation.y}deg` }}>
            <div className="spatial-object__model">
              <div className="spatial-object__base" />
              <div className="spatial-object__plinth" />
              <div className="spatial-object__roof" />
              <div className="spatial-object__roof-edge" />
              <div className="spatial-object__wall spatial-object__wall--back" />
              <div className="spatial-object__wall spatial-object__wall--side" />
              <div className="spatial-object__glass spatial-object__glass--left" />
              <div className="spatial-object__glass spatial-object__glass--right" />
              <div className="spatial-object__column spatial-object__column--one" />
              <div className="spatial-object__column spatial-object__column--two" />
              <div className="spatial-object__column spatial-object__column--three" />
              <div className="spatial-object__core" />
              <div className="spatial-object__shadow" />
            </div>
          </div>
          <div className="spatial-object__stage-foot"><span>CONCRETE / GLASS / BRONZE</span><span>CONCEPTUAL ARCHITECTURE</span></div>
        </div>
      </div>
    </section>
  );
}
