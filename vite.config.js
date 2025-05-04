import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import postcssCustomMedia from 'postcss-custom-media'
import postcssNesting from 'postcss-nesting'
import postcssGlobalData from '@csstools/postcss-global-data'
import { glob } from 'glob'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        react(),
        generouted(),
        postcssGlobalData({
            files: glob.sync(
                resolve(
                    __dirname,
                    './node_modules/@primer/primitives/dist/css/**/*.css'
                )
            ),
        }),
        postcssCustomMedia(),
        postcssNesting({ edition: '2024-02' }),
    ],
    server: { port: 1234 },
})
