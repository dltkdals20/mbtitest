export interface Destination {
  name: string
  country: string
  description: string
  emoji: string
  gradient: string
}

export interface Mate {
  type: string
  description: string
}

export interface TravelResult {
  mbti: string
  types: string
  title: string
  description: string
  destinations: Destination[]
  hotelStyle: string
  bestTime: string
  caution: string
  mates: Mate[]
  heroBg: string
  heroEmoji: string
  badgeBg: string
  badgeText: string
}

export const results: Record<string, TravelResult> = {
  ISTJ: {
    mbti: 'ISTJ',
    types: 'ISTJ',
    title: '꼼꼼한 클래식 여행자',
    description:
      '사전에 철저하게 리서치하고 완벽한 일정표를 만드는 당신은 여행의 안전과 효율을 최우선으로 생각합니다. 책에서 읽은 대로, 리뷰에서 본 대로 검증된 명소를 하나씩 방문하며 만족감을 느끼는 신뢰할 수 있는 여행자입니다. 정확한 정보를 바탕으로 한 안정적인 여행이야말로 진정한 여행이라 믿습니다.',
    destinations: [
      { name: '교토', country: '일본', description: '천 년의 역사가 살아 숨쉬는 고즈넉한 고도, 계획대로 움직이기 좋은 최적의 도시', emoji: '⛩️', gradient: 'from-rose-100 to-pink-50' },
      { name: '프라하', country: '체코', description: '유럽의 보석 같은 구시가지, 명소마다 정보가 풍부하고 동선이 잘 짜인 완벽한 여행지', emoji: '🏰', gradient: 'from-orange-100 to-amber-50' },
      { name: '싱가포르', country: '싱가포르', description: '세계적으로 안전하고 깔끔한 도시국가, 정확한 대중교통과 체계적인 관광 인프라', emoji: '🌆', gradient: 'from-sky-100 to-blue-50' },
    ],
    hotelStyle: '전통과 현대가 조화를 이루는 고급 비즈니스 호텔 또는 전통 료칸. 위치와 서비스가 검증된 체인 호텔을 선호하며, 리뷰를 꼼꼼히 확인하고 예약합니다.',
    bestTime: '성수기를 피한 봄·가을 비수기. 날씨와 인파 모두 예측 가능한 시즌을 선택합니다.',
    caution: '너무 빈틈없는 계획으로 유연성을 잃지 마세요. 예상치 못한 작은 발견이 최고의 추억이 될 수 있어요.',
    mates: [
      { type: 'ESTJ', description: '계획 실행을 함께할 든든한 파트너' },
      { type: 'ISFJ', description: '꼼꼼함을 인정해주는 따뜻한 배려의 메이트' },
      { type: 'ESFJ', description: '활기를 불어넣어 줄 소셜 버디' },
    ],
    heroBg: 'from-slate-200 to-blue-100',
    heroEmoji: '⛩️',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
  },

  ISFJ: {
    mbti: 'ISFJ',
    types: 'ISFJ',
    title: '따뜻한 힐링 여행자',
    description:
      '여행을 통해 지친 몸과 마음을 충전하는 당신은 편안함과 따뜻함을 중요하게 생각합니다. 화려한 관광보다 현지의 소박한 일상 속에서 진정성 있는 경험을 찾으며, 함께 여행하는 사람들의 행복을 먼저 챙기는 헌신적인 동반자입니다. 아늑한 카페 한 잔, 소박한 현지 음식에서 행복을 발견합니다.',
    destinations: [
      { name: '발리', country: '인도네시아', description: '신들의 섬에서 즐기는 요가와 힐링, 자연과 영성이 공존하는 치유의 여행지', emoji: '🌴', gradient: 'from-emerald-100 to-teal-50' },
      { name: '제주도', country: '한국', description: '가깝지만 깊은 자연의 품, 오름과 바다 사이에서 찾는 온전한 휴식', emoji: '🌊', gradient: 'from-green-100 to-emerald-50' },
      { name: '방콕', country: '태국', description: '스파 천국으로 유명한 도시, 저렴하고 훌륭한 태국 전통 마사지로 몸과 마음의 피로를 풀어요', emoji: '⛪', gradient: 'from-yellow-100 to-amber-50' },
    ],
    hotelStyle: '자연 속 힐링 리조트나 아늑한 분위기의 부티크 호텔. 편안한 침구와 조용한 환경을 우선시하며, 조식이 포함된 숙소를 선호합니다.',
    bestTime: '꽃 피는 봄이나 단풍 드는 가을. 자연이 가장 아름다운 시즌에 여행을 즐깁니다.',
    caution: '타인을 배려하다 본인의 여행 욕구를 희생하지 마세요. 당신의 행복도 중요해요.',
    mates: [
      { type: 'ESFJ', description: '따뜻한 감성을 함께 나눌 소셜 메이트' },
      { type: 'ISTJ', description: '안정적인 일정을 함께 소화할 파트너' },
      { type: 'INFJ', description: '깊은 이야기를 나눌 공감 메이트' },
    ],
    heroBg: 'from-emerald-200 to-teal-100',
    heroEmoji: '🌴',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
  },

  INFJ: {
    mbti: 'INFJ',
    types: 'INFJ',
    title: '심층 문화 탐험가',
    description:
      '단순한 관광을 넘어 그 땅의 역사, 문화, 사람들의 이야기에 깊이 몰입하는 당신은 진정한 의미의 여행자입니다. 현지인의 시선으로 바라보는 도시의 이면, 오래된 골목 어귀에서 느끼는 시간의 층위에서 특별한 감동을 찾습니다. 여행은 당신에게 자기 자신을 더 깊이 이해하는 철학적 여정입니다.',
    destinations: [
      { name: '이스탄불', country: '터키', description: '동서양이 교차하는 신비로운 도시, 수천 년의 역사가 겹겹이 쌓인 문화 탐구의 성지', emoji: '🕌', gradient: 'from-purple-100 to-violet-50' },
      { name: '교토', country: '일본', description: '철학자의 길부터 선종 사찰까지, 깊은 사색과 문화적 성찰이 가능한 정신적 여행지', emoji: '⛩️', gradient: 'from-rose-100 to-pink-50' },
      { name: '프라하', country: '체코', description: '카프카의 도시, 중세 골목 속 문학과 예술의 숨결이 살아있는 감성적인 여행지', emoji: '🏰', gradient: 'from-orange-100 to-amber-50' },
    ],
    hotelStyle: '역사적인 건물을 리노베이션한 헤리티지 호텔이나 현지 문화가 담긴 게스트하우스. 장소 자체가 이야기가 되는 숙소를 선호합니다.',
    bestTime: '관광객이 적은 비수기의 조용한 가을이나 초봄. 현지 분위기를 온전히 느낄 수 있는 한적한 시즌.',
    caution: '혼자만의 세계에 너무 빠져 동행자와의 소통을 잊지 마세요. 같이 있는 사람과의 교감도 소중한 여행의 일부예요.',
    mates: [
      { type: 'ENFJ', description: '방향을 잡아주고 에너지를 불어넣어 줄 리더 메이트' },
      { type: 'INFP', description: '감성적인 여행을 함께 나눌 공감 메이트' },
      { type: 'INTJ', description: '깊은 분석을 함께할 지적 메이트' },
    ],
    heroBg: 'from-violet-200 to-purple-100',
    heroEmoji: '🕌',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-800',
  },

  INTJ: {
    mbti: 'INTJ',
    types: 'INTJ',
    title: '전략적 독립 여행자',
    description:
      '여행도 전략적으로 계획하고 최적의 루트와 경험을 설계하는 당신은 독립심이 강하고 목적의식이 분명한 여행자입니다. 불필요한 관광 코스는 과감히 제외하고, 자신이 진정으로 원하는 것을 기준으로 완벽한 여행을 만들어갑니다. 남들이 다 가는 곳보다 자신만의 취향으로 선별한 여행이 진정한 가치를 지닙니다.',
    destinations: [
      { name: '도쿄', country: '일본', description: '체계적이고 효율적인 도시 시스템, 첨단 기술과 전통문화가 공존하는 독보적인 여행지', emoji: '🗼', gradient: 'from-pink-100 to-rose-50' },
      { name: '취리히', country: '스위스', description: '정확하고 효율적인 도시 구조, 혁신과 자연이 공존하는 세계 최고의 퀄리티 오브 라이프 도시', emoji: '🏔️', gradient: 'from-blue-100 to-sky-50' },
      { name: '싱가포르', country: '싱가포르', description: '아시아 최첨단 스마트 시티, 깔끔한 시스템과 다양한 문화가 압축된 효율의 도시', emoji: '🌆', gradient: 'from-sky-100 to-blue-50' },
    ],
    hotelStyle: '모던하고 기능적인 디자인 호텔 또는 프리미엄 서비스의 비즈니스 호텔. 불필요한 부대시설보다 핵심 품질을 중시합니다.',
    bestTime: '한적한 비수기로 효율적이고 집중적인 여행이 가능한 시즌. 혼잡 없이 자신만의 페이스로 탐험합니다.',
    caution: '지나친 완벽주의로 여행의 여유를 잃지 마세요. 계획에 없었던 우연이 최고의 경험이 될 수 있어요.',
    mates: [
      { type: 'ENTJ', description: '함께 목표를 세우고 실행할 전략적 파트너' },
      { type: 'ENFJ', description: '인간적인 따뜻함을 더해줄 소셜 메이트' },
      { type: 'INFJ', description: '깊은 대화를 나눌 지적 동반자' },
    ],
    heroBg: 'from-slate-200 to-zinc-100',
    heroEmoji: '🗼',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-800',
  },

  ISTP: {
    mbti: 'ISTP',
    types: 'ISTP',
    title: '자유로운 어드벤처러',
    description:
      '계획보다는 현장에서의 직관과 빠른 판단력으로 여행하는 당신은 어떤 상황도 유연하게 대처하는 능숙한 여행자입니다. 로컬 마켓, 야외 액티비티, 예상치 못한 골목에서의 발견이야말로 진정한 여행이라 믿습니다. 혼자서도 완벽하게 즐기는 자립형 여행의 고수입니다.',
    destinations: [
      { name: '치앙마이', country: '태국', description: '트레킹, 요리 클래스, 도이인타논 국립공원까지, 자연과 액티비티가 공존하는 모험가의 천국', emoji: '🐘', gradient: 'from-lime-100 to-green-50' },
      { name: '발리', country: '인도네시아', description: '서핑, 래프팅, 화산 트레킹까지 다양한 야외 액티비티를 즐길 수 있는 모험의 섬', emoji: '🌴', gradient: 'from-emerald-100 to-teal-50' },
      { name: '퀸스타운', country: '뉴질랜드', description: '번지점프의 발상지, 세계 최고의 어드벤처 스포츠 도시로 극한의 짜릿함을 경험하세요', emoji: '🏕️', gradient: 'from-teal-100 to-cyan-50' },
    ],
    hotelStyle: '현지 느낌이 물씬 나는 게스트하우스나 에어비앤비, 캠핑 사이트. 장소에 대한 경험 자체가 숙소의 가치입니다.',
    bestTime: '야외 활동이 즐거운 쾌적한 날씨의 봄·가을 시즌. 혹은 시즌 무관하게 자신의 목적에 맞는 시기를 선택합니다.',
    caution: '즉흥적으로 행동하다 안전을 소홀히 하지 마세요. 최소한의 비상 계획과 긴급 연락처는 항상 챙기세요.',
    mates: [
      { type: 'ESTP', description: '함께 모험을 즐길 액션 메이트' },
      { type: 'ISTJ', description: '현실적인 안전망 역할의 든든한 파트너' },
      { type: 'ISFP', description: '감성적인 경험을 함께할 자유로운 동반자' },
    ],
    heroBg: 'from-lime-200 to-green-100',
    heroEmoji: '🐘',
    badgeBg: 'bg-lime-100',
    badgeText: 'text-lime-800',
  },

  ISFP: {
    mbti: 'ISFP',
    types: 'ISFP',
    title: '감성 감각 여행자',
    description:
      '여행의 모든 순간을 감각적으로 받아들이는 당신은 아름다운 풍경, 맛있는 음식, 독특한 예술에서 깊은 감동을 느끼는 예술적 여행자입니다. 남들이 보지 못하는 세상의 아름다움을 발견하고, 그 순간을 온몸으로 느끼는 것이 당신의 여행 방식입니다. 사진 한 장에 담긴 감성이 수십 개의 인증샷보다 가치 있습니다.',
    destinations: [
      { name: '포르투', country: '포르투갈', description: '아줄레주 타일과 파두 음악이 흐르는 감성적인 도시, 예술과 생활이 자연스럽게 어우러진 곳', emoji: '🎨', gradient: 'from-orange-100 to-red-50' },
      { name: '리스본', country: '포르투갈', description: '트램이 오르내리는 언덕마다 펼쳐지는 그림 같은 풍경, 세상에서 가장 감성적인 도시', emoji: '🚋', gradient: 'from-yellow-100 to-orange-50' },
      { name: '발리', country: '인도네시아', description: '논밭 사이 카페, 열대 꽃향기, 일출을 마주하는 아름다운 순간들이 기다리는 감성 여행지', emoji: '🌴', gradient: 'from-emerald-100 to-teal-50' },
    ],
    hotelStyle: '감성적인 인테리어의 부티크 호텔이나 예술가들이 사랑한 빈티지 게스트하우스. 공간 자체가 작품 같은 숙소를 선호합니다.',
    bestTime: '꽃이 피는 봄이나 단풍과 선선한 바람의 가을. 자연이 아름다운 시즌에 감성이 배가됩니다.',
    caution: '감성에 흘러가다 중요한 이동이나 예약을 놓치지 않도록 최소한의 계획은 세워두세요.',
    mates: [
      { type: 'ESFP', description: '함께 즐길 에너지 넘치는 파티 메이트' },
      { type: 'INFP', description: '감성을 나눌 낭만적인 동반자' },
      { type: 'ISTP', description: '자유로운 탐험을 함께할 어드벤처 메이트' },
    ],
    heroBg: 'from-orange-200 to-amber-100',
    heroEmoji: '🎨',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-800',
  },

  INFP: {
    mbti: 'INFP',
    types: 'INFP',
    title: '낭만적 몽상가 여행자',
    description:
      '여행에서 삶의 의미와 내면의 감동을 찾는 당신은 깊은 감수성과 이상주의적 시선으로 세상을 바라봅니다. 완벽한 석양 아래 혼자 읽는 책, 작은 카페에서 마주치는 현지인의 이야기, 역사적 장소에서 느끼는 시간을 초월한 감동이 당신의 여행을 채웁니다. 여행은 당신에게 또 다른 나를 발견하는 내면 여정입니다.',
    destinations: [
      { name: '파리', country: '프랑스', description: '예술과 낭만의 도시, 골목 카페에서 쓰는 일기, 센강 변의 산책이 꿈같은 여행지', emoji: '🗼', gradient: 'from-indigo-100 to-blue-50' },
      { name: '산토리니', country: '그리스', description: '새하얀 지붕과 파란 바다가 만드는 환상적인 풍경, 세상에서 가장 낭만적인 노을을 감상할 수 있는 곳', emoji: '🤍', gradient: 'from-sky-100 to-blue-50' },
      { name: '교토', country: '일본', description: '철학자의 길을 걸으며 느끼는 벚꽃의 덧없음, 시간이 멈춘 듯 고요한 사찰의 아름다움', emoji: '⛩️', gradient: 'from-rose-100 to-pink-50' },
    ],
    hotelStyle: '작가와 예술가들이 사랑한 역사적인 빈티지 부티크 호텔. 이야기가 담긴 공간에서 영감을 받는 것을 즐깁니다.',
    bestTime: '꽃 피는 봄, 특히 벚꽃이나 라벤더 시즌. 낭만적인 분위기가 극대화되는 계절을 택합니다.',
    caution: '이상과 현실의 차이에 실망하지 않도록 기대치를 조절하고 현실도 받아들여요. 완벽하지 않아도 아름다운 여행이에요.',
    mates: [
      { type: 'ENFP', description: '꿈과 감성을 함께 나눌 영원한 친구' },
      { type: 'INFJ', description: '깊은 철학적 대화를 나눌 영혼 메이트' },
      { type: 'ISFP', description: '예술적 감성을 함께 느낄 감각적 동반자' },
    ],
    heroBg: 'from-indigo-200 to-blue-100',
    heroEmoji: '🗼',
    badgeBg: 'bg-indigo-100',
    badgeText: 'text-indigo-800',
  },

  INTP: {
    mbti: 'INTP',
    types: 'INTP',
    title: '지식 탐구 여행자',
    description:
      '여행지의 역사, 과학, 문화적 배경을 깊이 파고드는 당신은 지적 호기심이 강한 탐구형 여행자입니다. 유명 박물관의 전시품 하나하나를 꼼꼼히 읽고, 현지 역사의 맥락을 파악한 뒤 그 장소를 방문할 때 특별한 만족감을 느낍니다. 여행은 세상을 이해하는 지적 모험입니다.',
    destinations: [
      { name: '아테네', country: '그리스', description: '서양 문명의 발상지, 고대 철학자들이 걸었던 땅에서 역사와 지성의 숨결을 느끼세요', emoji: '🏛️', gradient: 'from-amber-100 to-yellow-50' },
      { name: '로마', country: '이탈리아', description: '영원의 도시, 2000년 역사가 겹겹이 쌓인 세계 최대의 야외 박물관', emoji: '🏛️', gradient: 'from-orange-100 to-amber-50' },
      { name: '베를린', country: '독일', description: '냉전의 역사부터 현대 예술까지, 지적 탐구를 자극하는 복잡하고 매력적인 도시', emoji: '🧱', gradient: 'from-slate-100 to-gray-50' },
    ],
    hotelStyle: '개성 있는 지역에 위치한 심플하고 기능적인 부티크 호텔이나 아파트먼트. 가격보다 위치와 편의성을 중시합니다.',
    bestTime: '봄·가을의 쾌적한 날씨에 집중적으로 박물관과 역사 유적을 탐방할 수 있는 시즌.',
    caution: '정보 수집에 너무 몰두하다 여행의 감각적 즐거움을 놓치지 마세요. 맛있는 음식, 아름다운 풍경도 함께 즐겨요.',
    mates: [
      { type: 'ENTP', description: '함께 토론하며 새로운 관점을 나눌 지적 메이트' },
      { type: 'INTJ', description: '함께 분석하고 탐구할 전략적 파트너' },
      { type: 'INFJ', description: '깊이 있는 이야기를 나눌 인문학적 동반자' },
    ],
    heroBg: 'from-amber-200 to-yellow-100',
    heroEmoji: '🏛️',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
  },

  ESTP: {
    mbti: 'ESTP',
    types: 'ESTP',
    title: '즉흥 액션 여행자',
    description:
      '현장의 에너지를 즐기고 즉흥적인 경험을 사랑하는 당신은 어떤 상황도 기회로 만드는 활기찬 여행자입니다. 로컬 클럽의 열기, 스카이다이빙의 짜릿함, 새벽 시장에서의 우연한 만남이야말로 진정한 여행이라 믿습니다. 계획 없는 하루가 평생의 추억이 됩니다.',
    destinations: [
      { name: '방콕', country: '태국', description: '카오산 로드의 열기부터 새벽 수상시장까지, 24시간 멈추지 않는 에너지 넘치는 도시', emoji: '⛪', gradient: 'from-yellow-100 to-amber-50' },
      { name: '두바이', country: 'UAE', description: '세계 최고의 스카이다이빙, 럭셔리 파티, 사막 액티비티까지 극강의 경험이 가득한 곳', emoji: '🏙️', gradient: 'from-amber-100 to-yellow-50' },
      { name: '바르셀로나', country: '스페인', description: '해변 파티에서 새벽 클럽까지, 세계에서 가장 활기찬 밤문화를 자랑하는 도시', emoji: '🏟️', gradient: 'from-orange-100 to-red-50' },
    ],
    hotelStyle: '도심 중앙의 트렌디한 라이프스타일 호텔이나 루프탑 바가 있는 호텔. 위치와 분위기가 최우선입니다.',
    bestTime: '현지 축제나 이벤트가 있는 성수기 시즌. 활기찬 분위기와 즉흥적인 만남이 가득한 시기.',
    caution: '충동적 결정으로 예산을 크게 초과하지 않도록 기본 예산 범위는 정해두세요. 즐기되 한도는 지켜요.',
    mates: [
      { type: 'ESFP', description: '함께 파티를 즐길 흥 넘치는 메이트' },
      { type: 'ISTP', description: '냉정하게 상황을 판단해줄 조율 파트너' },
      { type: 'ENTP', description: '새로운 아이디어로 여행을 풍부하게 해줄 메이트' },
    ],
    heroBg: 'from-orange-200 to-amber-100',
    heroEmoji: '⚡',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-800',
  },

  ESFP: {
    mbti: 'ESFP',
    types: 'ESFP',
    title: '흥부대 파티 여행자',
    description:
      '여행에서 최대한 즐거움을 뽑아내는 당신은 분위기를 이끌고 주변 사람들에게 에너지를 전파하는 파티의 영혼입니다. 낯선 사람도 금세 친구가 되고, 어떤 식당, 어떤 클럽, 어떤 해변에서도 그곳을 특별한 장소로 만들어버리는 마법을 가지고 있습니다. 여행이 끝나도 관계는 계속됩니다.',
    destinations: [
      { name: '바르셀로나', country: '스페인', description: '세계에서 가장 활기찬 비치 파티와 클럽 씬, 낮에는 해변 밤에는 축제가 이어지는 도시', emoji: '🏟️', gradient: 'from-orange-100 to-red-50' },
      { name: '발리', country: '인도네시아', description: '스미냑의 루프탑 바, 짱구의 서퍼 카페, 파티와 힐링이 공존하는 다채로운 여행지', emoji: '🌴', gradient: 'from-emerald-100 to-teal-50' },
      { name: '방콕', country: '태국', description: '아시아 최고의 나이트라이프, 낮에는 쇼핑 밤에는 파티, 에너지가 넘치는 도시', emoji: '⛪', gradient: 'from-yellow-100 to-amber-50' },
    ],
    hotelStyle: '루프탑 풀이나 소셜 라운지가 있는 트렌디한 4성급 리조트 호텔. 호텔 자체가 즐거운 공간이어야 합니다.',
    bestTime: '모두가 모이는 여름 성수기. 활기찬 분위기와 다양한 국적의 여행자들을 만날 수 있는 시즌.',
    caution: '흥에 취해 개인 안전과 소지품 관리를 잊지 마세요. 즐거움과 안전 사이의 균형을 항상 챙겨요.',
    mates: [
      { type: 'ENFP', description: '함께 세상을 탐험할 에너지 넘치는 파트너' },
      { type: 'ESTP', description: '함께 모험을 즐길 액션 메이트' },
      { type: 'ISFP', description: '감성적인 순간을 함께 느낄 아름다운 동반자' },
    ],
    heroBg: 'from-pink-200 to-rose-100',
    heroEmoji: '🎉',
    badgeBg: 'bg-pink-100',
    badgeText: 'text-pink-800',
  },

  ENFP: {
    mbti: 'ENFP',
    types: 'ENFP',
    title: '에너지 폭발 탐험가',
    description:
      '세상의 모든 가능성에 설레는 당신은 여행에서도 새로운 사람, 새로운 음식, 새로운 경험에 끊임없이 흥분하는 열정적인 탐험가입니다. 계획에 없었던 축제에 뛰어들고, 낯선 현지인의 초대에 기꺼이 응하며, 예상치 못한 여행이 최고의 추억이 됩니다. 여행은 당신에게 무한한 가능성의 세계입니다.',
    destinations: [
      { name: '멕시코시티', country: '멕시코', description: '세계에서 가장 활기찬 문화 수도, 프리다 칼로의 도시에서 예술과 음식과 사람들의 열정을 느끼세요', emoji: '🌮', gradient: 'from-yellow-100 to-green-50' },
      { name: '마라케시', country: '모로코', description: '미로 같은 메디나, 향신료 향기, 이국적인 색채의 향연. 모든 감각을 자극하는 마법의 도시', emoji: '🕌', gradient: 'from-orange-100 to-amber-50' },
      { name: '포르투', country: '포르투갈', description: '소박하고 따뜻한 사람들, 파두 음악, 와인 강변의 낭만. 예상치 못한 아름다움이 가득한 도시', emoji: '🎨', gradient: 'from-orange-100 to-red-50' },
    ],
    hotelStyle: '현지인과 여행자가 함께 어우러지는 소셜 부티크 호텔이나 활기찬 게스트하우스. 로비에서 새 친구를 사귀는 것도 여행의 일부.',
    bestTime: '사람이 많고 활기찬 성수기 시즌. 현지 축제와 함께라면 더욱 에너지가 넘칩니다.',
    caution: '모든 것을 하려다 번아웃되지 않도록 쉬는 시간과 혼자만의 재충전도 챙기세요. 지속 가능한 여행이 최고예요.',
    mates: [
      { type: 'INFP', description: '깊은 감성을 나눌 영혼의 단짝' },
      { type: 'ENFJ', description: '그룹을 이끌며 여행을 풍부하게 해줄 리더 메이트' },
      { type: 'ESFP', description: '함께 파티를 즐길 에너지 넘치는 버디' },
    ],
    heroBg: 'from-yellow-200 to-green-100',
    heroEmoji: '🌟',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
  },

  ENTP: {
    mbti: 'ENTP',
    types: 'ENTP',
    title: '창의적 모험가',
    description:
      '고정된 틀을 거부하고 항상 새로운 방식으로 여행을 바라보는 당신은 창의적이고 도전적인 여행자입니다. 다른 사람들이 놓치는 독특한 경험, 현지인도 잘 모르는 숨겨진 이야기, 기존 관광과 전혀 다른 루트가 당신을 설레게 합니다. 여행의 정답은 없다는 것을 가장 잘 아는 사람입니다.',
    destinations: [
      { name: '암스테르담', country: '네덜란드', description: '세계 최고의 박물관, 독특한 하우스보트, 사이클링 문화, 자유로운 도시의 정신이 살아있는 곳', emoji: '🚲', gradient: 'from-orange-100 to-amber-50' },
      { name: '베를린', country: '독일', description: '세계 최첨단 클럽 씬과 현대 예술, 역사와 반문화가 충돌하는 창의적 에너지의 도시', emoji: '🧱', gradient: 'from-slate-100 to-gray-50' },
      { name: '도쿄', country: '일본', description: '서브컬처의 성지, 예측 불가능한 골목 탐험, 세상 어디에도 없는 독특한 경험이 기다리는 도시', emoji: '🗼', gradient: 'from-pink-100 to-rose-50' },
    ],
    hotelStyle: '독특한 컨셉의 디자인 호텔이나 예술가들의 아지트가 된 아트 호스텔. 숙소 선택 자체도 하나의 창의적 경험입니다.',
    bestTime: '독창적인 전시나 페스티벌이 열리는 시즌. 계절보다 이벤트와 경험 중심으로 시기를 선택합니다.',
    caution: '새로운 것 찾기에 집중하다 기본적인 숙식과 휴식을 소홀히 하지 마세요. 에너지 관리도 여행 기술입니다.',
    mates: [
      { type: 'INTP', description: '깊이 있는 토론과 탐구를 함께할 지적 메이트' },
      { type: 'ENTJ', description: '아이디어를 실행에 옮겨줄 실행력 있는 파트너' },
      { type: 'ENFP', description: '함께 세상을 탐험할 에너지 넘치는 메이트' },
    ],
    heroBg: 'from-teal-200 to-cyan-100',
    heroEmoji: '💡',
    badgeBg: 'bg-teal-100',
    badgeText: 'text-teal-800',
  },

  ESTJ: {
    mbti: 'ESTJ',
    types: 'ESTJ / ISTJ',
    title: '가성비 탐험가',
    description:
      '당신은 무작정 떠나는 여행보다 철저한 리서치를 통해 최상의 루트를 찾아내는 것에 희열을 느낍니다. 1원이라도 더 아끼는 것에 집중하기보다, 지출 대비 최고의 효율과 만족도를 뽑아내는 가성비의 달인입니다. 정해진 예산 안에서 호텔의 위치, 교통편, 로컬 맛집까지 완벽하게 조율된 여행을 선호합니다.',
    destinations: [
      { name: '다낭', country: '베트남', description: '럭셔리 풀빌라도 합리적인 가격에 즐길 수 있는 최고의 가성비 휴양지', emoji: '🌉', gradient: 'from-cyan-100 to-teal-50' },
      { name: '타이베이', country: '대만', description: '저렴하고 깨끗한 대중교통과 밤낮으로 즐거운 먹거리 천국, 가성비 최강 도시', emoji: '🏮', gradient: 'from-red-100 to-orange-50' },
      { name: '방콕', country: '태국', description: '화려한 도심 야경과 저렴한 물가의 환상적인 밸런스, 스마트 여행자의 필수 방문지', emoji: '⛪', gradient: 'from-yellow-100 to-amber-50' },
    ],
    hotelStyle: '"위치 좋고 가성비 좋은 3~4성급 호텔" 역세권이나 시내 중심가에 위치해 이동 시간을 줄여주는 현대적인 비즈니스 호텔을 선호합니다.',
    bestTime: '비수기, 항공권 특가 시즌에 맞춘 스마트한 출발. 같은 여행을 더 저렴하게 즐기는 것이 진정한 고수입니다.',
    caution: '과도한 가성비 집착으로 여행의 재미를 놓치지 마세요. 가끔은 예산을 넘어서는 특별한 경험도 필요해요.',
    mates: [
      { type: 'ENFP', description: '계획적인 당신의 일정에 에너지를 더해줄 분위기 메이커' },
      { type: 'ESFP', description: '가성비 맛집에서도 즐겁게 리액션 해주는 긍정왕' },
      { type: 'ISTJ', description: '꼼꼼한 회계와 루트 확인을 함께할 든든한 파트너' },
    ],
    heroBg: 'from-green-200 to-teal-100',
    heroEmoji: '💰',
    badgeBg: 'bg-green-100',
    badgeText: 'text-green-800',
  },

  ESFJ: {
    mbti: 'ESFJ',
    types: 'ESFJ',
    title: '따뜻한 소통 여행자',
    description:
      '여행을 사람과의 관계를 깊게 하는 특별한 기회로 여기는 당신은 모두가 행복한 여행을 위해 노력하는 헌신적인 여행 리더입니다. 현지 음식을 함께 먹고, 추억을 함께 만들고, 돌아와서도 오래 이야기할 수 있는 여행을 가장 행복하게 생각합니다. 당신이 함께하면 모든 여행이 특별해집니다.',
    destinations: [
      { name: '오사카', country: '일본', description: '오코노미야키를 나눠 먹고, 도톤보리를 함께 누비는 맛과 정이 넘치는 미식 여행의 천국', emoji: '🏯', gradient: 'from-pink-100 to-rose-50' },
      { name: '발리', country: '인도네시아', description: '함께하는 요가 리트리트, 공동 요리 클래스, 선셋 크루즈. 모두가 행복한 그룹 여행의 최적지', emoji: '🌴', gradient: 'from-emerald-100 to-teal-50' },
      { name: '두브로브니크', country: '크로아티아', description: '아드리아해의 진주, 성벽 위 석양을 함께 바라보며 나누는 소중한 기억이 가득한 곳', emoji: '⛵', gradient: 'from-sky-100 to-blue-50' },
    ],
    hotelStyle: '훌륭한 서비스와 공용 공간이 잘 갖춰진 패밀리 리조트나 소셜 호텔. 그룹이 함께 모일 수 있는 공간이 중요합니다.',
    bestTime: '가족이나 친구들과 함께하기 좋은 연휴, 여름방학, 명절 시즌. 모두의 일정이 맞는 최적의 시기를 택합니다.',
    caution: '모두를 만족시키려다 정작 본인이 원하는 것을 포기하지 않도록 자신의 의견도 꼭 말해요.',
    mates: [
      { type: 'ISFJ', description: '배려의 마음이 통하는 따뜻한 파트너' },
      { type: 'ENFJ', description: '그룹을 함께 이끌어갈 완벽한 공동 리더' },
      { type: 'ESFP', description: '분위기를 살려줄 에너지 넘치는 메이트' },
    ],
    heroBg: 'from-rose-200 to-pink-100',
    heroEmoji: '💝',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
  },

  ENFJ: {
    mbti: 'ENFJ',
    types: 'ENFJ',
    title: '리드하는 인싸 여행자',
    description:
      '그룹 여행의 완벽한 리더인 당신은 모두의 취향을 파악하고 최선의 경험을 이끌어내는 타고난 코디네이터입니다. 단체 여행에서 누구도 소외되지 않도록 챙기고, 현지 문화 체험, 맛집 투어, 야경 관람까지 완벽하게 조율하는 여행 전도사입니다. 당신의 리더십이 평범한 여행을 특별하게 만듭니다.',
    destinations: [
      { name: '로마', country: '이탈리아', description: '콜로세움, 트레비 분수, 파스타 맛집까지. 그룹이 함께 경험하기 최적의 역사적이고 맛있는 도시', emoji: '🏛️', gradient: 'from-orange-100 to-amber-50' },
      { name: '바르셀로나', country: '스페인', description: '가우디 건축, 플라멩코 공연, 타파스 투어. 문화와 미식이 풍부한 그룹 여행 최적지', emoji: '🏟️', gradient: 'from-orange-100 to-red-50' },
      { name: '부다페스트', country: '헝가리', description: '온천 파티, 도나우강 크루즈, 루인 바. 다양한 연령대가 함께 즐길 수 있는 매력적인 도시', emoji: '🏰', gradient: 'from-amber-100 to-orange-50' },
    ],
    hotelStyle: '소셜 라운지가 잘 갖춰진 4~5성급 호텔이나 그룹 이용에 최적화된 리조트. 공용 공간의 퀄리티가 중요합니다.',
    bestTime: '현지 축제나 문화 이벤트가 있는 시즌. 그룹과 함께라면 어떤 시즌도 특별해집니다.',
    caution: '그룹을 이끌려다 지치지 않도록 혼자만의 재충전 시간도 반드시 확보하세요. 리더도 쉬어야 합니다.',
    mates: [
      { type: 'INFJ', description: '깊은 인문학적 대화를 나눌 지적 파트너' },
      { type: 'ENTP', description: '새로운 아이디어로 여행을 풍부하게 해줄 창의적 메이트' },
      { type: 'ESFJ', description: '따뜻한 배려로 그룹을 함께 케어할 파트너' },
    ],
    heroBg: 'from-amber-200 to-orange-100',
    heroEmoji: '👑',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
  },

  ENTJ: {
    mbti: 'ENTJ',
    types: 'ENTJ',
    title: '목표지향 파워 여행자',
    description:
      '여행도 목표를 세우고 최고의 경험을 얻기 위해 효율적으로 움직이는 당신은 강력한 리더십과 추진력을 가진 파워 여행자입니다. 5성급 호텔의 완벽한 서비스, 프리미엄 투어 경험, 최고급 레스토랑 예약까지 최상을 추구하며 여행에서도 성공적인 결과를 원합니다. 최고를 경험해야 진짜 여행입니다.',
    destinations: [
      { name: '뉴욕', country: '미국', description: '세계 금융·문화의 중심지, 미슐랭 레스토랑, 브로드웨이, 비즈니스와 여행을 동시에 잡는 파워 도시', emoji: '🗽', gradient: 'from-slate-100 to-gray-50' },
      { name: '두바이', country: 'UAE', description: '세계 최고의 럭셔리 호텔, 미래지향적 건축, 최상위 경험만 모아둔 야망의 도시', emoji: '🏙️', gradient: 'from-amber-100 to-yellow-50' },
      { name: '홍콩', country: '홍콩', description: '아시아 금융 허브, 미슐랭 3스타 레스토랑 최다 보유 도시, 비즈니스와 미식의 완벽한 조합', emoji: '🌃', gradient: 'from-red-100 to-orange-50' },
    ],
    hotelStyle: '최상급 서비스와 비즈니스 편의시설이 갖춰진 5성급 호텔. 프리미엄 컨시어지 서비스를 적극 활용합니다.',
    bestTime: '큰 이벤트나 비즈니스 출장과 연계 가능한 시기. 일석이조의 전략적 타이밍을 선택합니다.',
    caution: '여행도 성과로 측정하려 하지 말고 과정과 여유를 즐기세요. 뜻밖의 여유가 최고의 휴식이에요.',
    mates: [
      { type: 'INTJ', description: '함께 전략적으로 최고의 경험을 설계할 파트너' },
      { type: 'ENTP', description: '창의적 아이디어를 더해줄 브레인 메이트' },
      { type: 'ENFJ', description: '인간적인 따뜻함과 소통을 더해줄 소셜 파트너' },
    ],
    heroBg: 'from-gray-200 to-slate-100',
    heroEmoji: '🚀',
    badgeBg: 'bg-gray-100',
    badgeText: 'text-gray-800',
  },
}
