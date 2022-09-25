import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // host: '0.0.0.0', // ip地址
    // port: 3000, // 端口号
    open: true, // 是否自动打开浏览器
    proxy: {
      "/api": "http://localhost:1337",
      "upload": "http://localhost:1337"
    }
  }
})
