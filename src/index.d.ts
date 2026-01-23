declare module '@jegdev/sema-ui' {
  import { LitElement } from 'lit';

  export class SemaButton extends LitElement {
    // Coincide con 'mode' en tu JS.
    // Agregamos '' porque es tu default para el botón primario.
    mode: 'outline' | 'ghost' | '' | string;

    // Coincide con 'kind' (link o button)
    kind: 'link' | 'button' | string;

    // Coincide con 'custom' ('on' | 'off')
    custom: 'on' | 'off' | string;

    // Colores personalizados
    firstColor: string;
    secondaryColor: string;

    // Tamaños exactos según tu lógica JS
    size: 'sm' | 'md' | 'lg' | 'full' | string;

    // Tamaños de fuente exactos según tu lógica JS
    fontSize: 'sm' | 'md' | 'lg' | 'xl' | string;

    // Contenido y enlaces
    textLabel: string;
    url: string;
    target: '_blank' | '_self' | '_parent' | '_top' | string;
    altText: string;
  }
}