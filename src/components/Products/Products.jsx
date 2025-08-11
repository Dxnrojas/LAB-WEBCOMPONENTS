import "./Products.css";

export default function Products({ items = [] }) {
  return (
    <div className="products products--grid">
      {items.map((card) => {
        // Si no tenemos icono específico, usamos la misma imagen recortada
        const icon = card.icon || card.img;
        return (
          <article key={card.id} className="pcard">
            <div className="pcard__mediaWrap">
              <img src={card.img} alt={card.title} className="pcard__media" />
            </div>

            <div className="pcard__info">
              <div className="pcard__left">
                <img src={icon} alt="icon" className="pcard__icon" />
                <div className="pcard__texts">
                  <div className="pcard__title">{card.title}</div>
                  <div className="pcard__desc">{card.description}</div>
                </div>
              </div>
              <div className="pcard__right">
                <span className="pcard__more" aria-disabled>
                  {card.button || "More"}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
