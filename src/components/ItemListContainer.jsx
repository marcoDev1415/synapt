import ProductCard from './ProductCard.jsx'

function ItemListContainer({ greeting }) {
  return (
    <section className="item-list-container">
      <h1 className="item-list-container__title">{greeting}</h1>
      <p className="item-list-container__subtitle">Catálogo</p>
      <div className="product-grid">
        <ProductCard title="Producto Demo" price={1999} imageUrl="" />
        <ProductCard title="Producto Plus" price={2999} imageUrl="" />
        <ProductCard title="Producto Pro" price={3999} imageUrl="" />
      </div>
    </section>
  )
}

export default ItemListContainer


