import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, BaseStyles } from '@primer/react'
import Application from './templates/Application/Application.jsx'
import Index from './pages/Index.jsx'
import Settings from './pages/Settings.jsx'
import "./globals.css";

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
