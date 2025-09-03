import React, { useState } from 'react'

function BirthForm({ onSubmit }) {
  const [calendarType, setCalendarType] = useState('solar')
  const [formData, setFormData] = useState({
    year: '',
    month: '',
    day: '',
    hour: '',
    gender: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleGenderSelect = (gender) => {
    setFormData(prev => ({
      ...prev,
      gender
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.gender) {
      onSubmit({ ...formData, calendarType })
    }
  }

  return (
    <>
      <div className="calendar-toggle">
        <button 
          className={`toggle-btn ${calendarType === 'solar' ? 'active' : ''}`}
          onClick={() => setCalendarType('solar')}
        >
          양력
        </button>
        <button 
          className={`toggle-btn ${calendarType === 'lunar' ? 'active' : ''}`}
          onClick={() => setCalendarType('lunar')}
        >
          음력
        </button>
      </div>

      <form className="birth-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="year">년도</label>
            <input 
              type="number" 
              id="year"
              name="year"
              min="1900" 
              max="2100" 
              placeholder="1990" 
              value={formData.year}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="month">월</label>
            <select 
              id="month"
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              required
            >
              <option value="">선택</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}월
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="day">일</label>
            <input 
              type="number" 
              id="day"
              name="day"
              min="1" 
              max="31" 
              placeholder="15"
              value={formData.day}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="hour">시</label>
            <select 
              id="hour"
              name="hour"
              value={formData.hour}
              onChange={handleInputChange}
              required
            >
              <option value="">선택</option>
              <option value="0">자시 (23:00-01:00)</option>
              <option value="2">축시 (01:00-03:00)</option>
              <option value="4">인시 (03:00-05:00)</option>
              <option value="6">묘시 (05:00-07:00)</option>
              <option value="8">진시 (07:00-09:00)</option>
              <option value="10">사시 (09:00-11:00)</option>
              <option value="12">오시 (11:00-13:00)</option>
              <option value="14">미시 (13:00-15:00)</option>
              <option value="16">신시 (15:00-17:00)</option>
              <option value="18">유시 (17:00-19:00)</option>
              <option value="20">술시 (19:00-21:00)</option>
              <option value="22">해시 (21:00-23:00)</option>
            </select>
          </div>
        </div>

        <div className="form-group gender-group">
          <label>성별</label>
          <div className="gender-buttons">
            <button 
              type="button" 
              className={`gender-btn ${formData.gender === 'male' ? 'active' : ''}`}
              onClick={() => handleGenderSelect('male')}
            >
              남성
            </button>
            <button 
              type="button" 
              className={`gender-btn ${formData.gender === 'female' ? 'active' : ''}`}
              onClick={() => handleGenderSelect('female')}
            >
              여성
            </button>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          <span className="btn-text">운명 읽기</span>
          <div className="btn-glow"></div>
        </button>
      </form>
    </>
  )
}

export default BirthForm