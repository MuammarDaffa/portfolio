import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
