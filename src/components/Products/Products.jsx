import "./Products.css";

export default function Products({ items = [] }) {
  return (
    <div className="products grid">
      {items.map((card) => (
        <article key={card.id} className="card product">
          <img src={card.img} alt={card.title} className="card__media product__media" />
          <div className="card__body">
            <h3 className="card__title">{card.title}</h3>
            <p className="card__desc">{card.description}</p>
            <div style={{ marginTop: 12 }}>
              <span className="btn" aria-disabled>
                {card.button}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}