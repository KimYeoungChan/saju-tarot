const heavenlyStems = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계']
const earthlyBranches = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해']

export function calculateSaju(birthData) {
  const { year, month, day, hour, gender, calendarType } = birthData
  
  const yearIndex = (parseInt(year) - 4) % 60
  const yearStem = heavenlyStems[yearIndex % 10]
  const yearBranch = earthlyBranches[yearIndex % 12]
  
  const monthStem = heavenlyStems[(parseInt(month) + 2) % 10]
  const monthBranch = earthlyBranches[(parseInt(month) + 2) % 12]
  
  const dayStem = heavenlyStems[(parseInt(day) + 5) % 10]
  const dayBranch = earthlyBranches[(parseInt(day) + 7) % 12]
  
  const hourStem = heavenlyStems[(parseInt(hour) / 2) % 10]
  const hourBranch = earthlyBranches[(parseInt(hour) / 2) % 12]

  return {
    yearPillar: { stem: yearStem, branch: yearBranch },
    monthPillar: { stem: monthStem, branch: monthBranch },
    dayPillar: { stem: dayStem, branch: dayBranch },
    hourPillar: { stem: hourStem, branch: hourBranch },
    interpretations: generateInterpretations(yearStem, yearBranch, gender),
    readings: generateReadings(yearStem, yearBranch, dayStem, dayBranch)
  }
}

function generateInterpretations(yearStem, yearBranch, gender) {
  const personalityMap = {
    '갑': '리더십이 강하고 진취적인 성격',
    '을': '유연하고 적응력이 뛰어난 성격',
    '병': '열정적이고 활동적인 성격',
    '정': '따뜻하고 배려심이 깊은 성격',
    '무': '안정적이고 신중한 성격',
    '기': '실용적이고 현실적인 성격',
    '경': '결단력이 있고 추진력이 강한 성격',
    '신': '예리하고 분석적인 성격',
    '임': '지혜롭고 통찰력이 있는 성격',
    '계': '섬세하고 직관적인 성격'
  }

  return {
    personality: personalityMap[yearStem] || '독특한 개성을 가진 성격',
    fortune: '재물운이 상승하는 시기입니다. 새로운 기회가 찾아올 것입니다.',
    love: gender === 'male' ? 
      '진실한 사랑을 만날 수 있는 시기입니다.' : 
      '로맨틱한 만남이 기다리고 있습니다.',
    career: '경력 발전의 중요한 전환점이 될 수 있습니다.',
    health: '건강 관리에 주의를 기울이면 좋은 컨디션을 유지할 수 있습니다.'
  }
}

function generateReadings(yearStem, yearBranch, dayStem, dayBranch) {
  return {
    overview: `${yearStem}${yearBranch}년생의 당신은 타고난 리더십과 창의성을 갖추고 있습니다. 
    일주 ${dayStem}${dayBranch}의 영향으로 실행력과 추진력이 뛰어나며, 
    목표를 향해 꾸준히 나아가는 힘을 가지고 있습니다.`,
    
    yearly: `올해는 새로운 도전과 기회가 찾아오는 해입니다. 
    상반기에는 준비와 계획에 집중하고, 하반기에는 적극적인 실행이 필요합니다.`,
    
    elements: `오행 분석 결과, 목(木)과 화(火)의 기운이 강하게 나타납니다. 
    창의성과 열정이 뛰어나지만, 때로는 조급함을 보일 수 있으니 
    인내심을 기르는 것이 중요합니다.`,
    
    compatibility: `상대방의 사주와 조화를 이루려면, 
    수(水)나 금(金)의 기운을 가진 사람과의 만남이 좋습니다. 
    서로를 보완하며 균형잡힌 관계를 만들 수 있을 것입니다.`
  }
}