export default function LogoMark({ className = "wordmark", href = "/" }) {
  return (
    <a className={className} href={href} aria-label="ROVOR — home">
      <span className="logo-mark__letters" aria-hidden="true">
        {"ROVOR".split("").map((letter, index) => (
          <span className="logo-mark__letter" style={{ "--letter-index": index }} key={index}>{letter}</span>
        ))}
      </span>
      <span className="logo-mark__registered" aria-hidden="true">®</span>
    </a>
  );
}
