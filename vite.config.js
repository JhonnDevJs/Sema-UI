import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      
      name: 'SemaUI',
      
      fileName: (format) => `sema-ui.${format}.js`
    },
    rollupOptions: {
      external: /^lit/, 
      
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  }
});