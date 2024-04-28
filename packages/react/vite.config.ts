import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), dts(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: [resolve(__dirname, 'src/index.ts')],
      name: 'FirebaseAuthReact',
      formats: ['es'],
      fileName: (format) => `firebase-auth-ui-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
