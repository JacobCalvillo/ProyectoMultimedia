import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: 'https://JacobCalvillo.github.io/ProyectoMultimedia/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, './src/earth.html')
      }
    }
  }
});
