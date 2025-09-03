import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="cosmos-bg">
          <div className="stars"></div>
          <div className="aurora"></div>
        </div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>

        <div className="floating-elements">
          <div className="floating-orb"></div>
          <div className="floating-orb"></div>
          <div className="floating-orb"></div>
        </div>
      </div>
    </Router>
  )
}

export default App