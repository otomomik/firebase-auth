import { build } from 'vite'
import chokidar from 'chokidar'

build()

const watcher = chokidar.watch('./src/**/*.{ts,tsx,js,jsx}')
watcher.on('ready', () => {
  watcher.on('all', () => {
    build()
  })
})
