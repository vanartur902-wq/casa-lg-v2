import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Esta integración permite que todos los estilos de lujo que configuramos funcionen
  integrations: [tailwind()],
  
  // Esto ayuda a que las transiciones entre páginas sean suaves y premium
  viewTransitions: true,
  
  // Optimización para que la web cargue rápido (atrapa clientes)
  build: {
    inlineStylesheets: 'always',
  },
});