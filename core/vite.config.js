import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath:'mock',
      supportTs: false,
      localEnabled:true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'plugin': path.resolve(__dirname, 'src/plugins'),
      'views': path.resolve(__dirname, 'src/views')
    }
  },
  proxy: {
    '/api': {
      target: 'http://localhost:7001',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
})
