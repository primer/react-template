import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import postcssCustomMedia from 'postcss-custom-media'
import postcssNesting from 'postcss-nesting'
import postcssGlobalData from '@csstools/postcss-global-data'

export default defineConfig({
    plugins: [
        react(),
        generouted(),
        postcssNesting(),
        postcssCustomMedia(),
        postcssGlobalData({
            files: ['./node_modules/@primer/primitives/dist/css/**/*.css'],
        }),
    ],
    server: { port: 1234 },
})
