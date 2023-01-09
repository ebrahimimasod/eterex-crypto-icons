import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      cssCodeSplit:false,
      entry: resolve(__dirname, "lib/CryptoIcon.js"),
      name: 'EterexCryptoIcon',
    //  fileName: (format) => `eterex-crypto-icons.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
      }
    }
  }
})