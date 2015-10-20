import React from 'react'
import { render } from 'react-dom'
import App from './app'

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('app'))
}

export default App
