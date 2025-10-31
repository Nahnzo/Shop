import { ThemeSwitcher } from '../features/ThemeSwitcher/ThemeSwitcher'
import { useTheme } from '../shared/hooks/useTheme'

function App() {
  const { theme } = useTheme()

  return (
    <>
      <ThemeSwitcher />
      <div
        style={{
          width: '1000',
          height: '1000px',
          backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',
        }}
      >
        text
      </div>
    </>
  )
}

export default App
