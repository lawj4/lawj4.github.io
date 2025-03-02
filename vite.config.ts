import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/lawj4.github.io/',  // Set to your repo name if using a project page
});
