function CartWidget({ count = 0 }) {
  return (
    <button className="cart-widget" aria-label="Carrito de compras">
      <span className="cart-widget__icon">🛒</span>
      <span className="cart-widget__count">{count}</span>
    </button>
  )
}

export default CartWidget


