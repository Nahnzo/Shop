import { useTheme } from '../../shared/hooks/useTheme'
import { MoonIcon, SunIcon } from 'lucide-react'
import classes from './themeSwitcher.module.scss'

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme()

  return (
    <div className={classes.themeSwitcher}>
      <MoonIcon onClick={() => toggleTheme('dark')} />
      <SunIcon onClick={() => toggleTheme('light')} />
    </div>
  )
}
