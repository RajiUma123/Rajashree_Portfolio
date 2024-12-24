import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Rajashree_Portfolio/', // Correct base URL for GitHub Pages
});

