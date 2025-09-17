import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
  	'process.env': {}
  },
   server: {
    host: '10.169.130.43',
    port: 2025,
    proxy: {
      '/api': 'http://10.169.130.43:8001'
    }
  },
  resolve: {
  	alias: {
  		'@': resolve(__dirname, 'src')
  	}
  }
})
