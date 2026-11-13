import Link from "next/link";

export default function LogoMark({ className = "wordmark", href = "/" }) {
  return (
    <Link className={`logo-mark ${className}`} href={href} aria-label="ROVOR Architecture Studio — home">
      <svg className="logo-mark__symbol" viewBox="0 0 100 100" role="img" aria-hidden="true">
        <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M32 23H55C68 23 75 31 75 43C75 55 67 63 55 63H50M32 34V77M43 57L70 77" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
      <span className="logo-mark__type">
        <span className="logo-mark__letters" aria-hidden="true">
          {"ROVOR".split("").map((letter, index) => (
            <span className="logo-mark__letter" style={{ "--letter-index": index }} key={index}>{letter}</span>
          ))}
        </span>
        <span className="logo-mark__descriptor">ARCHITECTURE STUDIO</span>
      </span>
    </Link>
  );
}
