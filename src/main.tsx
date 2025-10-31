import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider.tsx'
import App from './providers/App.tsx'
import ErrorBoundaryProvider from './providers/ErrorBoundaryProvider/ErrorBoundaryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundaryProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ErrorBoundaryProvider>
)
