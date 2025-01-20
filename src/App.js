import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, BaseStyles } from '@primer/react'
import Playground from './pages/Playground.js'
import Settings from './pages/Settings.js'
import {AppHeader} from './components/header.jsx'
import "./globals.css";
import ColorModeSwitcher from './ColorModeSwitcher'
function App() {
    return (
      <ThemeProvider colorMode="auto">
          <BaseStyles>
          <BrowserRouter>
                  <AppHeader />
                  <Routes>
                      <Route path="/" element={<Playground />} />
                      <Route path="/settings" element={<Settings />} />
                  </Routes>
              </BrowserRouter>
          </BaseStyles>
      </ThemeProvider>
    )
}

export default App
