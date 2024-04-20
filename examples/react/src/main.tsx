import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import '@firebase-auth/react/reset.css'
import '@firebase-auth/react/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
