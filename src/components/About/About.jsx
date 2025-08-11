import "./About.css";

export default function About() {
  return (
    <section className="about about--stars">
      <div className="about__veil"></div>
      <div className="container">
        <div className="about__grid">
          <article className="aboutCard">
            <h3 className="aboutCard__title">About Us</h3>
            <span className="aboutCard__underline" ></span>
            <span className="aboutCard__cta" >
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M8 12h8M12 8l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </article>

          <article className="aboutCard">
            <h3 className="aboutCard__title">Careers</h3>
            <span className="aboutCard__underline"></span>
            <span className="aboutCard__cta">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M8 12h8M12 8l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
