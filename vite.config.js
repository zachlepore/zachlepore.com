import { defineConfig } from 'vite';

// GitHub Pages serves this project at /zachlepore.com/, not at the domain root.
// This rewrites production assets while local development stays at localhost:5173.
export default defineConfig({
  base: '/zachlepore.com/',
});
