import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'

export default defineConfig({ 
  plugins: [react(), generouted()],
  server: { port: 1234 },
})
