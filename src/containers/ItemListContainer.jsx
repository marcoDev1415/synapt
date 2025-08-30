import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchProducts } from '../services/productsService'
import ProductCard from '../components/ProductCard'

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchProducts(categoryId).then((data) => {
      setItems(data)
      setLoading(false)
    })
  }, [categoryId])

  return (
    <section className="item-list-container">
      <h1 className="item-list-container__title">{greeting}</h1>
      <p className="item-list-container__subtitle">{categoryId ? `Categoría: ${categoryId}` : 'Catálogo'}</p>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="product-grid">
          {items.map((p) => (
            <Link key={p.id} to={`/item/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ProductCard title={p.title} price={p.price} imageUrl={p.imageUrl} />
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default ItemListContainer


