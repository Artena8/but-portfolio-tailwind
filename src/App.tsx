import './index.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="bg-(--secondary-200)">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
