import React from 'react'

function ItemListContainer({ greeting }) {
  return (
    <section className="item-list-container">
      <h1 className="item-list-container__title">{greeting}</h1>
      <p className="item-list-container__subtitle">
        Pronto verás aquí el catálogo de productos.
      </p>
    </section>
  )
}

export default ItemListContainer


