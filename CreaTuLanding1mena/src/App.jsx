import React from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenido/a a mi tienda! Descubre nuestras ofertas" />
      </main>
    </>
  )
}

export default App


