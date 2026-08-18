# STRIDE — Shopping Cart

Una tienda deportiva de demostración creada para el proyecto **Shopping Cart**
de The Odin Project. La interfaz toma referencias generales del comercio
deportivo editorial —tipografía expresiva, fotografía de movimiento y alto
contraste— con una marca y un sistema visual originales.

## Funcionalidades

- Tres rutas: inicio (`/`), tienda (`/shop`) y carrito (`/cart`).
- Navegación compartida con contador de unidades en tiempo real.
- Catálogo deportivo obtenido desde DummyJSON y catálogo local de respaldo.
- Filtros por categoría y orden por precio.
- Cantidad manual, incremento y decremento en cada producto.
- Carrito con acumulación de productos repetidos, edición, eliminación y vaciado.
- Subtotal, envío y total calculados al instante.
- Persistencia segura en `localStorage` y sincronización entre pestañas.
- Diseño responsive y navegación accesible con teclado.
- Checkout marcado explícitamente como demostración, sin pagos reales.

## Desarrollo

Requiere Node.js 22.13 o posterior.

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

Las pruebas usan React Testing Library, Vitest y `user-event`. Cubren el reducer
del carrito, persistencia, catálogo remoto y fallback, navegación, cantidades,
contador, filtros, totales y eliminación. No prueban internamente el router.

## Despliegue

El proyecto usa vinext y OpenAI Sites sobre Cloudflare. El enrutamiento de las
tres páginas se resuelve en el servidor, por lo que no requiere reglas SPA de
Netlify o Vercel en este despliegue.
