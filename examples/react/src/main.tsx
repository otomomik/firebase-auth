import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import '@otomomik/firebase-auth-ui-react/reset.css'
import '@otomomik/firebase-auth-ui-react/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
