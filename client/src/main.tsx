import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppThemeProvider } from './context/ThemeContext.tsx'
import { MusicProvider } from './context/MusicContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <MusicProvider>
        <App />
      </MusicProvider>
    </AppThemeProvider>
  </React.StrictMode>,
) 