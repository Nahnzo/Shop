import { useTheme } from '../../shared/hooks/useTheme'

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme()

  return <button onClick={toggleTheme}>Сменить тему</button>
}
