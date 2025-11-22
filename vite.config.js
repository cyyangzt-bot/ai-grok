import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),  // v4.0 內建支援
        require('autoprefixer'),
      ],
    },
  },
});
