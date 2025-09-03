import React from 'react'

function SajuDisplay({ sajuData }) {
  const pillars = [
    { id: 'year', label: '년주', data: sajuData.yearPillar },
    { id: 'month', label: '월주', data: sajuData.monthPillar },
    { id: 'day', label: '일주', data: sajuData.dayPillar },
    { id: 'hour', label: '시주', data: sajuData.hourPillar }
  ]

  return (
    <div className="saju-display glass-card">
      <h2 className="section-title">사주팔자</h2>
      <div className="saju-grid">
        {pillars.map(pillar => (
          <div key={pillar.id} className="pillar">
            <h3>{pillar.label}</h3>
            <div className="stem-branch">
              <div className="stem">{pillar.data.stem}</div>
              <div className="branch">{pillar.data.branch}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SajuDisplay