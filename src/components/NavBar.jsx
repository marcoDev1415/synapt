function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <a href="/" className="navbar__logo">MiTienda</a>
      </div>
      <nav className="navbar__nav">
        <a href="#home" className="navbar__link">Inicio</a>
        <a href="#catalogo" className="navbar__link">Catálogo</a>
        <a href="#ofertas" className="navbar__link">Ofertas</a>
        <a href="#contacto" className="navbar__link">Contacto</a>
      </nav>
      <div className="navbar__actions">
        <CartWidget count={0} />
      </div>
    </header>
  )
}

function CartWidget({ count = 0 }) {
  return (
    <button className="cart-widget" aria-label="Carrito de compras">
      <span className="cart-widget__icon">🛒</span>
      <span className="cart-widget__count">{count}</span>
    </button>
  )
}

export default NavBar


