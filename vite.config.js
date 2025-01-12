import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      external: ['@vercel/analytics/react'], // Externalize only if needed
      output: {
        globals: {
          '@vercel/analytics/react': 'VercelAnalytics', // Define global if using external
        },
      },
    },
  },
});
