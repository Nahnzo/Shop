import { useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import type { ThemeType } from '../../shared/consts'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem('theme') as ThemeType) ?? 'light'
  })

  const toggleTheme = (newTheme: ThemeType) => {
    setTheme((prev) => {
      const actualTheme = newTheme ?? (prev === 'light' ? 'dark' : 'light')
      localStorage.setItem('theme', actualTheme)
      return actualTheme
    })
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
