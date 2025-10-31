import { createContext } from 'react'
import type { ThemeType } from '../../shared/consts'

export interface ThemeContextType {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
