import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [react(), envCompatible as any],
  server: {
    // localhost 포트 설정
    port: 3000,
  },
});
