import React from 'react'

function Header() {
  return (
    <header className="hero-section">
      <h1 className="main-title">
        <span className="title-kr">神秘 사주타로</span>
        <span className="title-sub">운명의 빛을 찾아서</span>
      </h1>
      <div className="mystical-symbol">
        <div className="yin-yang"></div>
        <div className="orbiting-elements">
          <span className="element" data-element="wood">木</span>
          <span className="element" data-element="fire">火</span>
          <span className="element" data-element="earth">土</span>
          <span className="element" data-element="metal">金</span>
          <span className="element" data-element="water">水</span>
        </div>
      </div>
    </header>
  )
}

export default Header