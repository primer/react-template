import { ThemeProvider, BaseStyles } from '@primer/react'

import Playground from './Playground'
import ColorModeSwitcher from './ColorModeSwitcher'

import './base.css'

function App() {
    return (
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <Playground />
                <ColorModeSwitcher />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
