import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), dts(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/SignIn/SignIn.tsx'),
        resolve(__dirname, 'src/SignOut/SignOut.tsx'),
      ],
      name: 'FirebaseAuthReact',
      formats: ['es'],
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return `firebase-auth-react.${format}.js`
        }
        return `${entryName}.${format}.js`
      },
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
