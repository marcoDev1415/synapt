# E-commerce React (Vite)

Proyecto base de un e-commerce construido con React + Vite. Incluye navegación con React Router, componentes base (NavBar, CartWidget, ProductCard) y contenedores (ItemListContainer, ItemDetailContainer) que simulan fetch de datos con Promises.

## Requisitos

- Node.js 20 (recomendado >= 20.19)
- npm 10+

## Instalación y ejecución

```bash
npm install
npm run dev
```

Build de producción y preview:

```bash
npm run build
npm run preview
```

## Scripts disponibles

- `npm run dev`: servidor de desarrollo (Vite)
- `npm run build`: build de producción
- `npm run preview`: sirve el build localmente

## Estructura principal

```
src/
  components/
    CartWidget.jsx
    NavBar.jsx
    ProductCard.jsx
    RandomContent.jsx
  containers/
    ItemDetailContainer.jsx
    ItemListContainer.jsx
  data/
    products.js
  services/
    productsService.js
  App.jsx
  main.jsx
  index.css
```

## Rutas (React Router)

- `/`: catálogo general (ItemListContainer)
- `/category/:categoryId`: catálogo filtrado por categoría
- `/item/:itemId`: detalle de producto (ItemDetailContainer)
- `*`: 404 (ruta de fallback)

Los contenedores usan `useParams()` para leer los segmentos dinámicos y disparar el fetch simulado.

## Datos y servicios

- `src/data/products.js`: lista estática de productos (mock)
- `src/services/productsService.js`: Promises con `setTimeout` para simular latencia

## Componentes clave

- `NavBar`: navegación y categorías, integra `CartWidget`
- `ItemListContainer`: contenedor; obtiene productos (opcionalmente por categoría) y lista con `Array.map()` usando `key`
- `ItemDetailContainer`: contenedor; obtiene un producto por `id` y muestra `ItemDetail` + `ItemCount` (contador simple)
- `ProductCard`: tarjeta visual de producto
- `RandomContent`: bloques informativos aleatorios para enriquecer cada vista

Prop destacada: `greeting` enviada desde `App` hacia `ItemListContainer`.

## Flujo básico

1. El usuario navega entre categorías desde el `NavBar` (enlaces a `/category/...`).
2. `ItemListContainer` lee `categoryId` (si existe) y carga productos filtrados.
3. Al hacer clic en una card, se navega a `/item/:itemId` y `ItemDetailContainer` carga el detalle.
4. `ItemCount` permite seleccionar unidades (lógica de carrito futura).

## Git y despliegue

Repositorio remoto configurado. Para subir cambios:

```bash
git add .
git commit -m "mensaje"
git push
```

## Próximos pasos (sugerencias)

- Integrar un estado global (Context/Redux) para el carrito
- Persistencia de carrito (localStorage)
- Manejo de errores y loaders más elaborados
- UI: Bootstrap, Tailwind o librería de componentes

