import { ProductsList } from '../features'
import { useTheme } from '../shared/hooks/useTheme'
import { Navbar } from '../widgets'
import './styles/index.scss'

function App() {
  const { theme } = useTheme()
  return (
    <div className={`app app_${theme}_theme`}>
      <Navbar />
      <main className="main">
        <ProductsList />
      </main>
    </div>
  )
}

export default App
