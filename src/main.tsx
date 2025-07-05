import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Hello, world!</h1>
  </React.StrictMode>
)

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1 className="text-4xl font-bold text-red-500">Tailwind Manual Mode</h1>
  </React.StrictMode>
)
