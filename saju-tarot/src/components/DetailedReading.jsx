import React from 'react'

function DetailedReading({ sajuData, selectedTab, onTabChange }) {
  const tabs = [
    { id: 'overview', label: '총운' },
    { id: 'yearly', label: '연운' },
    { id: 'elements', label: '오행분석' },
    { id: 'compatibility', label: '궁합' }
  ]

  const getTabContent = () => {
    switch (selectedTab) {
      case 'overview':
        return sajuData.readings.overview
      case 'yearly':
        return sajuData.readings.yearly
      case 'elements':
        return sajuData.readings.elements
      case 'compatibility':
        return sajuData.readings.compatibility
      default:
        return ''
    }
  }

  return (
    <div className="detailed-reading glass-card">
      <h2 className="section-title">상세 풀이</h2>
      <div className="reading-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${selectedTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="reading-content">
        <div className="tab-content active">
          {getTabContent()}
        </div>
      </div>
    </div>
  )
}

export default DetailedReading