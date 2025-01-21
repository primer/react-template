import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, BaseStyles } from '@primer/react'
import Code from './pages/Code.jsx'
import Issues from './pages/Issues.jsx'
import "./globals.css";
import {useTheme} from '@primer/react'
function App() {
    return (
      <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
          <BaseStyles>
          <HashRouter>
                    <Routes>
                        <Route path="/" element={<Code />} />
                        <Route path="/issues" element={<Issues />} />
                    </Routes>
              </HashRouter>
          </BaseStyles>
      </ThemeProvider>
    )
}

export default App
