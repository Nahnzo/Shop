import { ThemeSwitcher } from '../features/ThemeSwitcher/ThemeSwitcher'
import { useTheme } from '../shared/hooks/useTheme'

function App() {
  const { theme } = useTheme()
  const a: number = 111
  console.log(a)
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
