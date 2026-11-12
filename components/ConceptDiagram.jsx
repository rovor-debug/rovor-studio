export default function ConceptDiagram({ type = "slope" }) {
  const common = (
    <>
      <defs>
        <pattern id="diagram-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeOpacity=".09" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="360" fill="url(#diagram-grid)" />
      <path d="M32 318H568" stroke="currentColor" strokeOpacity=".28" strokeWidth="1" />
    </>
  );

  return (
    <svg className="concept-diagram__drawing" viewBox="0 0 600 360" role="img" aria-label="Abstract conceptual architecture diagram">
      {common}
      {type === "slope" && (
        <>
          <path d="M32 275L165 245L270 214L390 180L568 130" fill="none" stroke="#9c835f" strokeWidth="2" />
          <path d="M145 245L145 205H300V218M300 218V174H445V165" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M145 205L190 160H345L300 205M300 174L345 130H490L445 174" fill="none" stroke="currentColor" strokeOpacity=".65" strokeWidth="1.4" />
          <path d="M345 160L430 90" stroke="#9c835f" strokeWidth="1.5" strokeDasharray="5 6" />
          <path d="M430 90L422 105M430 90L414 94" stroke="#9c835f" strokeWidth="1.5" />
          <text x="42" y="298">TOPOGRAPHY</text><text x="365" y="72">FRAMED VIEW</text><text x="164" y="190">BUILT FORM</text>
        </>
      )}
      {type === "courtyard" && (
        <>
          <rect x="112" y="66" width="376" height="228" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="235" y="125" width="130" height="110" fill="#9c835f" fillOpacity=".16" stroke="#9c835f" strokeWidth="2" />
          <path d="M112 108H235M365 108H488M112 250H235M365 250H488M175 66V125M425 66V125M175 235V294M425 235V294" stroke="currentColor" strokeOpacity=".7" strokeWidth="1.5" />
          <path d="M300 28V112M292 102L300 112L308 102M300 332V248M292 258L300 248L308 258" fill="none" stroke="#9c835f" strokeWidth="1.5" />
          <text x="260" y="184">VOID</text><text x="118" y="48">SPATIAL EDGE</text><text x="385" y="320">DAYLIGHT</text>
        </>
      )}
      {type === "material" && (
        <>
          <path d="M92 90H250V270H92Z" fill="#9c835f" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5" />
          <path d="M250 90H365V270H250Z" fill="currentColor" fillOpacity=".09" stroke="currentColor" strokeWidth="1.5" />
          <path d="M365 90H508V270H365Z" fill="#9c835f" fillOpacity=".38" stroke="currentColor" strokeWidth="1.5" />
          <path d="M92 130H250M92 150H250M92 170H250M250 112L365 248M250 145L330 270M365 90L508 232M395 90L508 203" stroke="currentColor" strokeOpacity=".3" strokeWidth="1" />
          <path d="M140 56L208 56M208 56L198 48M208 56L198 64M430 56L490 56M490 56L480 48M490 56L480 64" fill="none" stroke="#9c835f" strokeWidth="1.5" />
          <text x="125" y="302">TEXTURE</text><text x="286" y="302">EDGE</text><text x="415" y="302">REFLECTION</text>
        </>
      )}
    </svg>
  );
}
