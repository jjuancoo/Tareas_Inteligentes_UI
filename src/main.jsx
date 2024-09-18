import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Configuracion de React-Router-Dom
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>,
  </Router>
)
