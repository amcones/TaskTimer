import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    strictPort: true, // * 固定端口(如果端口被占用则中止)
    host: true, // 0.0.0.0
    port: 3920 // 指定启动端口
  },
});