import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__brand">
          <img
            src="https://www.hoyoverse.com/_nuxt/img/logo-light.3def3bc.png"
            alt="HoYoverse logo"
            className="navbar__logo"
          />
        </div>
        <nav className="navbar__menu" aria-label="Menú principal">
          <span className="navbar__item is-active">Home</span>
          <span className="navbar__item">News</span>
          <span className="navbar__item">About Us</span>
          <span className="navbar__item">Careers</span>
          <span className="navbar__item">Help Center</span>
        </nav>
      </div>
    </header>
  );
}