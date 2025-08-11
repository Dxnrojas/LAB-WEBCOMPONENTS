import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <nav className="footer__nav" aria-label="Footer menu">
          <span>Home</span>
          <span>News</span>
          <span>About Us</span>
          <span>Careers</span>
          <span>Business Affairs</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Help Center</span>
        </nav>

        <img
          className="footer__logo"
          src="https://www.hoyoverse.com/_nuxt/img/logo-light.3def3bc.png"
          alt="HoYoverse"
        />

        <div className="footer__copy">
          Copyright © COGNOSPHERE. All Rights Reserved.
        </div>
      </div>

      {/* Botón decorativo del globo (estático) */}
      <span className="footer__lang" aria-hidden>
        <svg viewBox="0 0 24 24" width="18" height="18">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M12 3v18M3 12h18M5.5 7.5c2 .9 5 .9 6.5.9s4.5 0 6.5-.9M5.5 16.5c2-.9 5-.9 6.5-.9s4.5 0 6.5.9"
            fill="none" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      </span>
    </footer>
  );
}
