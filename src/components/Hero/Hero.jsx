import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" role="img"></div>
      <div className="hero__overlay"></div>

      <div className="hero__layer">
        <div className="container">
          <div className="hero__content">
            <div className="hero__kicker">Honkai Impact 3rd</div>
            <h1 className="hero__title">v8.3</h1>
            <h2 className="hero__subtitle">[Flickers of a Spacetime Warp]</h2>
            <h2 className="hero__subtitle hero__subtitle--bottom">Avaible Now!</h2>
          </div>
        </div>
      </div>
    </section>
  );
}