import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, BaseStyles } from '@primer/react'
import Application from './templates/Application.js'
import Index from './pages/Index.js'
import Settings from './pages/Settings.js'
import "./globals.css";
import ColorModeSwitcher from './ColorModeSwitcher'
function App() {
    return (
      <ThemeProvider colorMode="auto">
          <BaseStyles>
          <HashRouter>
                  <Application>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </Application>
              </HashRouter>
          </BaseStyles>
      </ThemeProvider>
    )
}

export default App
