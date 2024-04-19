import { UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import devcert from 'devcert'

// https://vitejs.dev/config/
export default async (): Promise<UserConfigExport> => {
  const { key, cert } = await devcert.certificateFor('localhost')

  return {
    plugins: [react()],
    server: {
      https: {
        key,
        cert,
      },
    },
  }
}
