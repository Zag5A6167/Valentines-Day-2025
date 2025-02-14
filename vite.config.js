import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({ 
  plugins: [react()],
  base: mode === 'production' ? '/Valentines-Day-2025/' : '/', 
  build: {
    outDir: 'dist'
  }
}));