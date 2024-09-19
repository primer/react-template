import { BaseStyles, ThemeProvider } from '@primer/react'

import ColorModeSwitcher from './ColorModeSwitcher'
import Playground from './Playground'

const App = () => {
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
