# STRIDE — Shopping Cart

Una tienda deportiva de demostración creada para el proyecto **Shopping Cart**
de The Odin Project. La interfaz toma referencias generales del comercio
deportivo editorial —tipografía expresiva, fotografía de movimiento y alto
contraste— con una marca y un sistema visual originales.

## Funcionalidades

- Tres rutas: inicio (`/`), tienda (`/shop`) y carrito (`/cart`).
- Selector de idioma **Español / English** en el encabezado, con español
  como idioma por defecto y persistencia entre visitas.
- Navegación compartida con contador de unidades en tiempo real.
- Catálogo deportivo obtenido desde DummyJSON y catálogo local de respaldo.
- Filtros por categoría y orden por precio.
- Cantidad manual, incremento y decremento en cada producto.
- Carrito con acumulación de productos repetidos, edición, eliminación y vaciado.
- Subtotal, envío y total calculados al instante.
- Persistencia segura en `localStorage` y sincronización entre pestañas.
- Diseño responsive y navegación accesible con teclado.
- Checkout marcado explícitamente como demostración, sin pagos reales.

## Stack

React 19, TypeScript, Vite 8 y React Router. Sin backend ni base de datos:
el catálogo remoto se consulta directamente desde el navegador, con
respaldo local si la API no responde. Compila a un sitio estático (`dist/`)
desplegable en cualquier hosting.

## Desarrollo

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
```

## Validación

```bash
npm test
npm run lint
npm run build
```

Las pruebas usan React Testing Library, Vitest y `user-event`: 15 casos que
cubren el reducer del carrito, persistencia, catálogo remoto y fallback,
navegación, cantidades, contador, filtros, totales, eliminación y el
selector de idioma.

## Despliegue

El proyecto compila a estático con `npm run build` (salida en `dist/`) y no
depende de ningún proveedor en particular.

- **Netlify / Vercel:** import directo del repositorio de GitHub; ambos
  detectan Vite automáticamente y usan `netlify.toml` / `vercel.json`
  (ya incluidos) sin configuración adicional.
- **GitHub Pages / Cloudflare Pages / cualquier hosting estático:** subir el
  contenido de `dist/` tras ejecutar `npm run build`. Para un GitHub Pages
  de tipo proyecto (`usuario.github.io/repo`), compilar con
  `VITE_BASE_PATH=/repo/ npm run build`.
