import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../services/productsService'

function ItemCount({ initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial)
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
      <span>{qty}</span>
      <button onClick={() => setQty((q) => q + 1)}>+</button>
      <button onClick={() => onAdd(qty)}>Agregar al carrito</button>
    </div>
  )
}

function ItemDetail({ product }) {
  if (!product) return null
  return (
    <article className="product-card" style={{ maxWidth: 720, margin: '0 auto' }}>
      <div className="product-card__media" style={{ aspectRatio: '16 / 9' }}>
        {product.imageUrl ? (
          <img className="product-card__img" src={product.imageUrl} alt={product.title} />
        ) : (
          <div className="product-card__placeholder" aria-hidden>🛍️</div>
        )}
      </div>
      <div className="product-card__body">
        <h2 className="product-card__title">{product.title}</h2>
        <p style={{ marginTop: 0 }}>{product.description}</p>
        <p className="product-card__price">${product.price}</p>
        <ItemCount onAdd={(qty) => console.log('Agregar', qty)} />
      </div>
    </article>
  )
}

function ItemDetailContainer() {
  const { itemId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchProductById(itemId).then((data) => {
      setProduct(data)
      setLoading(false)
    })
  }, [itemId])

  if (loading) return <p style={{ padding: 20 }}>Cargando...</p>
  if (!product) return <p style={{ padding: 20 }}>Producto no encontrado.</p>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer


