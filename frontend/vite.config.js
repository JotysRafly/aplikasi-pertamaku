import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Jotys/',  // Ganti 'Nama' dengan subdirektori yang kamu inginkan
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // Mengekspos server ke jaringan publik
    port: 5173,       // Port default untuk Vite
  },
});
