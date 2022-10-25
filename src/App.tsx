import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Router from './router/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App
