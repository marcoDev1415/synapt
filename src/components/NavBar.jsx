import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo">MiTienda</Link>
      </div>
      <nav className="navbar__nav">
        <NavLink to="/" className="navbar__link">Inicio</NavLink>
        <NavLink to="/category/electronica" className="navbar__link">Electrónica</NavLink>
        <NavLink to="/category/moda" className="navbar__link">Moda</NavLink>
        <NavLink to="/category/hogar" className="navbar__link">Hogar</NavLink>
      </nav>
      <div className="navbar__actions">
        <CartWidget count={0} />
      </div>
    </header>
  )
}

export default NavBar


