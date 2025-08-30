function getRandomItems(array, count) {
  const copy = [...array]
  const items = []
  while (items.length < count && copy.length) {
    const idx = Math.floor(Math.random() * copy.length)
    items.push(copy.splice(idx, 1)[0])
  }
  return items
}

const TITLES = [
  'Novedades destacadas',
  'Tips para tu compra',
  'Recomendado para ti',
  'Inspiración de la semana',
]

const PARAGRAPHS = [
  'Aprovecha envíos rápidos en cientos de productos seleccionados.',
  'Combina tus compras y obtén descuentos por volumen en carrito.',
  'Productos con garantía oficial y soporte especializado.',
  'Descubre ofertas relámpago disponibles por tiempo limitado.',
  'Pagos seguros con múltiples métodos y cuotas disponibles.',
]

function RandomContent({ variant = 'list' }) {
  const title = getRandomItems(TITLES, 1)[0]
  const paragraphs = getRandomItems(PARAGRAPHS, variant === 'detail' ? 3 : 2)

  return (
    <section className="random-content">
      <h3 className="random-content__title">{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="random-content__text">{p}</p>
      ))}
    </section>
  )
}

export default RandomContent


