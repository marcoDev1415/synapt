function ProductCard({ title, price, imageUrl }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        {imageUrl ? (
          <img className="product-card__img" src={imageUrl} alt={title} />
        ) : (
          <div className="product-card__placeholder" aria-hidden>
            🛍️
          </div>
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">${price}</p>
        <button className="product-card__btn" type="button">Agregar</button>
      </div>
    </article>
  )
}

export default ProductCard


