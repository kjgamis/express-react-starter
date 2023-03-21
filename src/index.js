import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = document.querySelector('#root')

const App = () => {
  return (
    <Provider store={store}>
      Hello World
    </Provider>
  )
}

ReactDOM.render(<App />, root)
