import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment this block if you need to externalize axios or other modules
  // build: {
  //   rollupOptions: {
  //     external: ['axios'], // Specify external modules here
  //   },
  // },
});
