import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import { ThemeProvider, BaseStyles } from '@primer/react'

import './reset.css'
import './globals.css'

import ColorModeSwitcher from './components/ColorModeSwitcher'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <ColorModeSwitcher />
                <Routes />
            </BaseStyles>
        </ThemeProvider>
    </StrictMode>
)
