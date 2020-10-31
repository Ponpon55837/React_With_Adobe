import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SSRProvider } from '@react-aria/ssr'

ReactDOM.render(
  <SSRProvider>
    <App />
  </SSRProvider>,
  document.getElementById('root')
)
