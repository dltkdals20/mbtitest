export type MbtiAxis = 'EI' | 'SN' | 'TF' | 'JP'
export type MbtiLetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

export interface Option {
  text: string
  strong: string
  value: MbtiLetter
}

export interface Question {
  id: number
  axis: MbtiAxis
  category: string
  text: string
  emoji: string
  gradient: string
  optionA: Option
  optionB: Option
}

export const questions: Question[] = [
  {
    id: 1,
    axis: 'JP',
    category: 'TRAVEL STYLE',
    text: '여행 계획을 세울 때 나는?',
    emoji: '✈️',
    gradient: 'from-sky-50 to-blue-100',
    optionA: { text: '출발 전 일정표와 동선을', strong: '꼼꼼히 정리한다', value: 'J' },
    optionB: { text: '큰 틀만 정하고 현지에서', strong: '자유롭게 움직인다', value: 'P' },
  },
  {
    id: 2,
    axis: 'EI',
    category: 'SOCIAL ENERGY',
    text: '여행 중 저녁 시간, 나는?',
    emoji: '🌆',
    gradient: 'from-purple-50 to-violet-100',
    optionA: { text: '로컬 펍이나 식당에서', strong: '새로운 사람들과 어울린다', value: 'E' },
    optionB: { text: '숙소에서 조용히 쉬거나', strong: '나만의 시간을 즐긴다', value: 'I' },
  },
  {
    id: 3,
    axis: 'SN',
    category: 'EXPLORATION',
    text: '여행지 관광 명소에서 나는?',
    emoji: '🗺️',
    gradient: 'from-emerald-50 to-teal-100',
    optionA: { text: '검증된 주요 명소를 빠짐없이', strong: '방문하고 인증샷을 찍는다', value: 'S' },
    optionB: { text: '분위기 있는 골목이나', strong: '숨겨진 장소를 찾아다닌다', value: 'N' },
  },
  {
    id: 4,
    axis: 'TF',
    category: 'DECISION MAKING',
    text: '여행 중 불편한 일이 생겼을 때 나는?',
    emoji: '⚡',
    gradient: 'from-amber-50 to-yellow-100',
    optionA: { text: '빠르게 원인을 파악하고', strong: '해결책을 찾아 행동한다', value: 'T' },
    optionB: { text: '동행자의 감정을 먼저 살피고', strong: '함께 상황을 이겨낸다', value: 'F' },
  },
  {
    id: 5,
    axis: 'JP',
    category: 'FLEXIBILITY',
    text: '현지에서 갑자기 계획이 바뀐다면?',
    emoji: '🌊',
    gradient: 'from-cyan-50 to-sky-100',
    optionA: { text: '최대한 원래 계획에 가깝게', strong: '조정하려고 노력한다', value: 'J' },
    optionB: { text: '새로운 상황을 즐기며', strong: '즉흥적으로 흘러간다', value: 'P' },
  },
  {
    id: 6,
    axis: 'EI',
    category: 'INTERACTION',
    text: '현지인이 먼저 말을 걸어오면?',
    emoji: '💬',
    gradient: 'from-rose-50 to-pink-100',
    optionA: { text: '반갑게 대화를 이어가며', strong: '정보도 얻고 친구가 된다', value: 'E' },
    optionB: { text: '짧게 답하고', strong: '나만의 여행에 집중한다', value: 'I' },
  },
  {
    id: 7,
    axis: 'SN',
    category: 'FOOD CHOICE',
    text: '여행지에서 식당을 고를 때 나는?',
    emoji: '🍜',
    gradient: 'from-orange-50 to-amber-100',
    optionA: { text: '후기와 평점을 보고', strong: '맛집 리스트를 따라간다', value: 'S' },
    optionB: { text: '골목을 걷다 분위기 있어 보이면', strong: '즉흥적으로 들어간다', value: 'N' },
  },
  {
    id: 8,
    axis: 'TF',
    category: 'TRAVEL VALUE',
    text: '여행에서 가장 중요하게 여기는 것은?',
    emoji: '⭐',
    gradient: 'from-indigo-50 to-violet-100',
    optionA: { text: '효율적인 동선과', strong: '가성비 높은 경험', value: 'T' },
    optionB: { text: '오래 기억될', strong: '특별한 감동과 순간', value: 'F' },
  },
  {
    id: 9,
    axis: 'JP',
    category: 'ACCOMMODATION',
    text: '호텔 예약은 어떻게 하나요?',
    emoji: '🏨',
    gradient: 'from-teal-50 to-emerald-100',
    optionA: { text: '출발 몇 달 전에', strong: '미리 꼼꼼히 예약해둔다', value: 'J' },
    optionB: { text: '현지 도착 후', strong: '봐가면서 그날 결정한다', value: 'P' },
  },
  {
    id: 10,
    axis: 'EI',
    category: 'GROUP SIZE',
    text: '여행 인원 구성에 대해 나는?',
    emoji: '👥',
    gradient: 'from-violet-50 to-purple-100',
    optionA: { text: '여러 사람과 함께 다니는 것이', strong: '훨씬 즐겁고 신난다', value: 'E' },
    optionB: { text: '소수의 친한 친구나', strong: '혼자 여행이 더 편하다', value: 'I' },
  },
  {
    id: 11,
    axis: 'SN',
    category: 'PHOTOGRAPHY',
    text: '여행 사진은 주로 어떻게 찍나요?',
    emoji: '📸',
    gradient: 'from-pink-50 to-rose-100',
    optionA: { text: '유명 명소 인증샷과', strong: '음식 사진 위주로 찍는다', value: 'S' },
    optionB: { text: '일상적인 풍경, 감성적인', strong: '순간들을 포착한다', value: 'N' },
  },
  {
    id: 12,
    axis: 'TF',
    category: 'REVIEW',
    text: '여행 후 리뷰를 쓴다면?',
    emoji: '✍️',
    gradient: 'from-lime-50 to-green-100',
    optionA: { text: '가격, 교통, 장단점 등', strong: '객관적인 정보 위주로', value: 'T' },
    optionB: { text: '느낌, 분위기, 감정적인', strong: '경험과 추억 위주로', value: 'F' },
  },
]
