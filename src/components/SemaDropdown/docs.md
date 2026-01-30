# Sema Button (`<sema-dropdown>`)

El componente `<sema-dropdown>` es un elemento de interfaz versátil que permite renderizar dropdowns o submenus para el usuario ya sea dentro de una web o una PWA con estilos consistentes, y soporte para dark mode nativo y autónomo.

## Instalación

Asegúrate de importar el componente en tu proyecto. Aquí tienes ejemplos para los frameworks más populares:

### React / Next.js

Importa la librería en tu archivo principal (`main.jsx`, `App.jsx`) o en el `layout.tsx`.

```jsx
import "@jegdev/semaui";

export default function App() {
	return (
		<sema-dropdown
			label="dropdown"
			items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
		></sema-dropdown>
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

```javascript
import "@jegdev/semaui";

<sema-dropdown
	label="dropdown"
	items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
></sema-dropdown>;
```

### Angular Agrega CUSTOM_ELEMENTS_SCHEMA en tu módulo para permitir el uso de Web Components.

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import "@jegdev/semaui";

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

### Astro

```typescript
import "@jegdev/semaui";
```

```html
<sema-dropdown
	label="dropdown"
	items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
></sema-dropdown>
```

### Svelte

```typescript
import "@jegdev/semaui";
```

```html
<sema-dropdown
	label="dropdown"
	items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
></sema-dropdown>
```

## Ejemplos de Uso

### 1. Dropdown básico

Por defecto, el componente renderiza un nombre para el botón (label="string") y una lista de items (enlaces) para el usuario utilizando un array con formato (items='[{"label": "string", "path": "string"}]') y con los estilos del icono de flecha rojo.

```html
<sema-dropdown
	label="dropdown"
	items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
></sema-dropdown>
```

### 2. Dropdown avanzado

Cuando se requiere el componente sema-dropdown puede renderizar los links divididos por catedorias, para lograrlo solo hay que agregar la propiedad nueva ("category": "string") al array que se le proporciona a items de la siguiente manera y seguido reagrupar los links en una propiedad nueva ("items": [])

```html
<sema-dropdown
	label="Opciones"
	color="blue"
	items='[
        {"category": "Cuenta", "items": [{"label": "Perfil", "path": "/perfil"}, {"label": "Ajustes", "path": "/ajustes"}]},
        {"category": "Sesión", "items": [{"label": "Cerrar Sesión", "path": "/logout"}]},
      ]'
>
</sema-dropdown>
```

### 2. Cambiar color

Para que el componente de acordion cambie su color predeterminado define la propiedad `color=""`.

```html
<sema-dropdown
	color="blue"
	label="dropdown"
	items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
></sema-dropdown>
```

La propiedad `color=""` puede recibir distintos formatos para colocar los colores, puedes usar los predetermiados como lo harias comunmente en css usando para palabras reservada "red", "blue", "green", etc. O puedes hacer uso de colores exadecimales como "#da2b48". "#fcfcfc", "#0c0c0c", etc. Tambien puedes hacer uso de rgb() de la misma forma.

#### Ejemplos:

- Con palabras reservadas

```html
<sema-dropdown
	color="blue"
	label="dropdown"
	items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
></sema-dropdown>
```

- Con exadecimales

```html
<sema-dropdown
	color="#0077ff"
	label="dropdown"
	items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
></sema-dropdown>
```

- Con rgb()

```html
<sema-dropdown
	color="rgb(0, 85, 255)"
	label="dropdown"
	items='[{"label": "Perfil", "path": "/perfil"}, {"label": "Salir", "path": "/logout"}]'
></sema-dropdown>
```

---

## API Reference

| Propiedad | Tipo     | Default   | Descripción                                       |
| :-------- | :------- | :-------- | :------------------------------------------------ |
| `color`   | `String` | `#da2b48` | Puedes usar `blue`, `#0077ff` y `rgb(0, 85, 255)` |
| `label`   | `String` | `""`      | Puedes pasarle aqui el titulo de la pregunta.     |
| `items`   | `Array`  | `[]`      | Pueder pasarle aqui el array corres pondiente.    |
