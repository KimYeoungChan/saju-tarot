import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SajuDisplay from '../components/SajuDisplay'
import TarotCards from '../components/TarotCards'
import DetailedReading from '../components/DetailedReading'
import { calculateSaju } from '../utils/sajuCalculator'
import '../styles/ResultPage.css'

function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [sajuData, setSajuData] = useState(null)
  const [selectedTab, setSelectedTab] = useState('overview')

  useEffect(() => {
    if (!location.state?.birthData) {
      navigate('/')
      return
    }

    const calculatedSaju = calculateSaju(location.state.birthData)
    setSajuData(calculatedSaju)
  }, [location.state, navigate])

  if (!sajuData) {
    return <div>Loading...</div>
  }

  return (
    <main className="container">
      <div className="result-header">
        <h1 className="main-title">
          <span className="title-kr">神秘 사주타로</span>
          <span className="title-sub">당신의 운명</span>
        </h1>
        <button className="back-btn" onClick={() => navigate('/')}>
          다시 보기
        </button>
      </div>

      <section className="result-section">
        <SajuDisplay sajuData={sajuData} />
        <TarotCards sajuData={sajuData} />
        <DetailedReading 
          sajuData={sajuData} 
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </section>
    </main>
  )
}

export default ResultPage