import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@generouted/react-router'
import { ThemeProvider, BaseStyles } from '@primer/react'

import './reset.css'
import './globals.css'

import ColorModeSwitcher from './components/ColorModeSwitcher'

const router = createBrowserRouter(routes, { basename: import.meta.env.VITE_BASE_URL })
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <ColorModeSwitcher />
                <RouterProvider router={router} />
            </BaseStyles>
        </ThemeProvider>
    </StrictMode>
)
