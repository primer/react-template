import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'

import { glob } from 'glob'
import { resolve } from 'path'

import postcssCustomMedia from 'postcss-custom-media'
import postcssNesting from 'postcss-nesting'
import postcssGlobalData from '@csstools/postcss-global-data'

export default defineConfig({
    plugins: [react(), generouted()],
    css: {
        postcss: {
            plugins: [
                postcssNesting(),
                postcssGlobalData({
                    files: glob.sync(
                        resolve(
                            __dirname,
                            './node_modules/@primer/primitives/dist/css/**/*.css'
                        )
                    ),
                }),
                postcssCustomMedia(),
            ],
        },
    },
    server: { port: 1234 },
})
