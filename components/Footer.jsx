export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__brand" href="#home">ROVOR<span>®</span></a>
      <p>Independent architecture<br />& spatial design studio.</p>
      <div className="footer__right">
        <a href="mailto:hello@rovor.studio">Get in touch ↗</a>
        <span>© {new Date().getFullYear()} ROVOR Studio</span>
      </div>
    </footer>
  );
}
