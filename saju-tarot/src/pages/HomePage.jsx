import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import BirthForm from '../components/BirthForm'
import '../styles/HomePage.css'

function HomePage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = (formData) => {
    setIsLoading(true)
    
    setTimeout(() => {
      navigate('/result', { state: { birthData: formData } })
    }, 1500)
  }

  return (
    <main className="container">
      <Header />
      
      <section className="input-section glass-card">
        <h2 className="section-title">생년월일시 입력</h2>
        <BirthForm onSubmit={handleFormSubmit} />
      </section>

      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="yin-yang spinning"></div>
            <p>운명을 읽고 있습니다...</p>
          </div>
        </div>
      )}
    </main>
  )
}

export default HomePage