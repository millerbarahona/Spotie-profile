import './App.css'
import { NavBar } from './components'
import Router from './router/Router'
import styles from './App.module.css'
import { uiStore } from './state'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const uiState = uiStore()
  return (
    <div className="App">

      <BrowserRouter>
        <div className={styles.container}>
          {/* {
            uiState.navbar ? <NavBar /> : <div></div>
          } */}
          <div className={styles.main}>
            <Router />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
