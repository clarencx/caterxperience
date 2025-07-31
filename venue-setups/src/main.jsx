import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' // Added more imports if needed
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add more routes here if needed */}
        <Route path="/edit2DSetup" element={<edit2DSetup />} />
        {/* Example route for edit2DSetup, adjust as necessary */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
