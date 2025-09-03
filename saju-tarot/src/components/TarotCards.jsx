import React, { useState } from 'react'

function TarotCards({ sajuData }) {
  const [flippedCards, setFlippedCards] = useState(new Set())

  const cards = [
    { 
      id: 'personality', 
      title: '성격과 기질', 
      icon: '🌟',
      content: sajuData.interpretations.personality 
    },
    { 
      id: 'fortune', 
      title: '재물운', 
      icon: '💰',
      content: sajuData.interpretations.fortune 
    },
    { 
      id: 'love', 
      title: '애정운', 
      icon: '❤️',
      content: sajuData.interpretations.love 
    },
    { 
      id: 'career', 
      title: '직업운', 
      icon: '💼',
      content: sajuData.interpretations.career 
    },
    { 
      id: 'health', 
      title: '건강운', 
      icon: '🍀',
      content: sajuData.interpretations.health 
    }
  ]

  const handleCardClick = (cardId) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cardId)) {
        newSet.delete(cardId)
      } else {
        newSet.add(cardId)
      }
      return newSet
    })
  }

  return (
    <div className="interpretation-cards">
      <div className="card-deck">
        {cards.map(card => (
          <div 
            key={card.id}
            className={`tarot-card glass-card ${flippedCards.has(card.id) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="card-front">
              <h3>{card.title}</h3>
              <div className="card-icon">{card.icon}</div>
            </div>
            <div className="card-back">
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TarotCards