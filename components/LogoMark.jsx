export default function LogoMark({ className = "wordmark", href = "/" }) {
  return (
    <a className={`logo-mark ${className}`} href={href} aria-label="ROVOR Architecture Studio — home">
      <svg className="logo-mark__symbol" viewBox="0 0 90 100" role="img" aria-hidden="true">
        <path d="M17 12H55C70 12 79 22 79 36C79 49 69 59 55 59H50M17 29V88M37 54L75 88" fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
      <span className="logo-mark__type">
        <span className="logo-mark__letters" aria-hidden="true">
          {"ROVOR".split("").map((letter, index) => (
            <span className="logo-mark__letter" style={{ "--letter-index": index }} key={index}>{letter}</span>
          ))}
        </span>
        <span className="logo-mark__descriptor">ARCHITECTURE STUDIO</span>
      </span>
    </a>
  );
}
