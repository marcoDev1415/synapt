import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'
import './index.css'

function NotFound() {
  return <p style={{ padding: 20 }}>404 - Página no encontrada</p>
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido/a a mi tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
