# Sema Card Product (`<sema-card-product>`)

El componente `<sema-card-product>` es un elemento de interfaz diseñado para mostrar información de productos de manera atractiva y organizada, ideal para catálogos, tiendas en línea o galerías de artículos.

## Instalación

Asegúrate de importar el componente en tu proyecto. Aquí tienes ejemplos para los frameworks más populares:

### React / Next.js

Importa la librería en tu archivo principal (`main.jsx`, `App.jsx`) o en el `layout.tsx`.

```jsx
import "@jegdev/sema-ui";

export default function App() {
	return (
		<div style={{ display: "flex", gap: "20px" }}>
			<sema-card-product
				id="123"
				title="Auriculares Premium"
				category="Audio"
				image="https://ejemplo.com/imagen.jpg"
				rate={4.5}
				count={120}
				price={299.99}
			></sema-card-product>
		</div>
	);
}
```

Nota para Next.js: Si usas App Router, importa el componente en un Client Component o en el layout.tsx (usando 'use client' si es necesario).

### En Vue, configura Vite (o tu bundler) para tratar las etiquetas sema- como elementos personalizados y evitar advertencias de compilación.

```javascript
// vite.config.js export default defineConfig({

plugins: [
	vue({
		template: {
			compilerOptions: {
				isCustomElement: (tag) => tag.startsWith("sema-"),
			},
		},
	}),
];
```

Uso en componente:

```html
<script setup>
	import "@jegdev/sema-ui";
</script>

<template>
	<sema-card-product
		id="123"
		title="Auriculares Premium"
		category="Audio"
		image="https://ejemplo.com/imagen.jpg"
		:rate="4.5"
		:count="120"
		:price="299.99"
	></sema-card-product>
</template>
```

### Angular Agrega CUSTOM_ELEMENTS_SCHEMA en tu módulo para permitir el uso de Web Components.

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import "@jegdev/sema-ui";

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

### Astro

```typescript
import "@jegdev/sema-ui";
```

```html
	<sema-card-product
		id="123"
		title="Auriculares Premium"
		category="Audio"
		image="https://ejemplo.com/imagen.jpg"
		:rate="4.5"
		:count="120"
		:price="299.99"
	></sema-card-product>
```

### Svelte

```typescript
import "@jegdev/sema-ui";
```

## Ejemplos de Uso

### 1. Card básica

Por defecto, el componente renderiza una card que recibe atributos id (string), title (string), category (string), image (string), :rate (number), :count (number), :price (number).

```html
	<sema-card-product
		id="123"
		title="Auriculares Premium"
		category="Audio"
		image="https://ejemplo.com/imagen.jpg"
		:rate="4.5"
		:count="120"
		:price="299.99"
	></sema-card-product>
```

---

## API Reference

| Propiedad  | Tipo     | Default   | Descripción                                                               |
| :--------- | :------- | :-------- | :------------------------------------------------------------------------ |
| `id`       | `String` | ""        | Identificador único del producto. Se muestra opcionalmente en la tarjeta. |
| `title`    | `String` | ""        | Nombre o título del producto.                                             |
| `category` | `String` | ""        | Categoría a la que pertenece el producto.                                 |
| `image`    | `String` | ""        | URL de la imagen del producto.                                            |
| `rate`     | `Number` | 0         | Calificación del producto (0 a 5). Se visualiza como estrellas.           |
| `count`    | `Number` | 0         | Número de valoraciones o reseñas que ha recibido el producto.             |
| `price`    | `Number` | 0         | Precio del producto.                                                      |