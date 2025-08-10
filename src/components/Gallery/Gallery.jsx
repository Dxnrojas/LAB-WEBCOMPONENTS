import "./Gallery.css";

export default function Gallery({ items = [] }) {
  return (
    <div className="gallery gallery--four">
      {items.map((card) => (
        <article
          key={card.id}
          className={`gcard ${card.span === "wide" ? "gcard--wide" : ""}`}
        >
          <img src={card.img} alt={card.title} className="gcard__media" />
          <div className="gcard__overlay" />
          {card.badge && (
            <span
              className={`gcard__badge ${
                card.badge === "Company" ? "is-company" : "is-product"
              }`}
            >
              {card.badge}
            </span>
          )}
          <div className="gcard__body">
            <div className="gcard__kicker">{card.title}</div>
            <h3 className="gcard__title">{card.description}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}