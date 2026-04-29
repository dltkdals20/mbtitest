'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Footer from '@/components/Footer'
import { getRecommendedHotels, results } from '@/data/results'

function ResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get('type') ?? ''
  const [shared, setShared] = useState(false)

  const result = results[type]

  useEffect(() => {
    if (type && !result) {
      router.replace('/')
    }
  }, [type, result, router])

  if (!result) return null
  const recommendedHotels = getRecommendedHotels(result.mbti)

  const handleShare = async () => {
    const text = `나의 MBTI 여행 타입은 ${result.mbti} ${result.title}!\nMBTI 여행 처방전에서 당신의 여행 타입을 찾아보세요.`
    const url = window.location.href

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: 'MBTI 여행 처방전', text, url })
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${text}\n${url}`)
        setShared(true)
        setTimeout(() => setShared(false), 2500)
      } catch {
        alert(`공유 링크: ${url}`)
      }
    }
  }

  return (
    <>
      <main className="flex-grow px-5 pt-8 pb-12 space-y-8">
        {/* Hero */}
        <section className="text-center space-y-4">
          <div
            className={`inline-block px-4 py-1.5 rounded-full ${result.badgeBg} ${result.badgeText} text-[12px] font-bold tracking-[0.05em]`}
          >
            {result.types}
          </div>
          <h2 className="text-[28px] font-extrabold leading-[1.3] text-primary">
            당신은 {result.title} 타입이에요
          </h2>
          <p className="text-[16px] leading-[1.6] text-on-surface-variant px-2">
            {result.description.slice(0, 60)}...
          </p>
          <div
            className={`relative mt-4 rounded-[32px] overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br ${result.heroBg} flex flex-col items-center justify-center`}
            aria-hidden="true"
          >
            <span className="text-[100px] leading-none">{result.heroEmoji}</span>
            <span className="mt-4 text-[36px] font-extrabold text-white/80 tracking-widest drop-shadow">
              {result.mbti}
            </span>
          </div>
        </section>

        {/* Personality Analysis */}
        <div className="glass-card rounded-[24px] p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-white/50">
          <h3 className="text-[24px] font-bold leading-[1.3] text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">description</span>
            여행 성향 분석
          </h3>
          <p className="text-[16px] leading-[1.6] text-on-surface-variant">{result.description}</p>
        </div>

        {/* Destinations */}
        <section className="space-y-4">
          <h3 className="text-[24px] font-bold leading-[1.3] text-primary flex items-center gap-2">
            <span className="material-symbols-outlined">location_on</span>
            추천 여행지
          </h3>
          <div className="flex flex-col gap-4">
            {result.destinations.map((dest) => (
              <div
                key={dest.name}
                className="flex bg-white rounded-2xl p-3 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-slate-50 overflow-hidden"
              >
                <div
                  className={`w-24 h-24 rounded-xl shrink-0 bg-gradient-to-br ${dest.gradient} flex flex-col items-center justify-center`}
                  aria-hidden="true"
                >
                  <span className="text-4xl">{dest.emoji}</span>
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <h4 className="text-[18px] font-bold text-slate-800">
                    {dest.name},{' '}
                    <span className="text-[16px] font-semibold text-on-surface-variant">
                      {dest.country}
                    </span>
                  </h4>
                  <p className="text-[14px] leading-[1.5] text-on-surface-variant mt-0.5">
                    {dest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detail Cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-[24px] p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-slate-50">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-3 block">
              hotel
            </span>
            <h4 className="text-[18px] font-bold text-primary mb-2">추천 숙소 스타일</h4>
            <p className="text-[16px] leading-[1.6] text-on-surface-variant">{result.hotelStyle}</p>
            <div className="mt-5 rounded-2xl bg-surface-container-low p-4">
              <p className="text-[12px] font-bold tracking-[0.05em] text-primary mb-3">
                추천 호텔 리스트 (고객사 교체용)
              </p>
              {recommendedHotels.length ? (
                <div className="space-y-2">
                  {recommendedHotels.map((hotel, idx) => (
                    <div
                      key={`${hotel.name}-${idx}`}
                      className="flex items-center justify-between bg-white rounded-xl px-3 py-2 border border-slate-100"
                    >
                      <div className="pr-3">
                        <p className="text-[14px] leading-[1.5] text-on-surface font-semibold">
                          {idx + 1}. {hotel.name}
                        </p>
                        <p className="text-[12px] leading-[1.4] text-on-surface-variant mt-0.5">
                          {hotel.note}
                        </p>
                      </div>
                      <span className="text-xs text-slate-400 shrink-0">{hotel.rating}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl px-3 py-2 border border-slate-100 text-[14px] text-on-surface-variant">
                  추천 호텔 준비 중입니다.
                </div>
              )}
            </div>
          </div>
          <div className="bg-primary-container/20 rounded-[24px] p-5 border border-primary-container/30">
            <span className="material-symbols-outlined text-primary mb-2 block">calendar_month</span>
            <h4 className="text-[16px] font-bold text-primary mb-2">최적의 시기</h4>
            <p className="text-[15px] leading-[1.6] text-on-primary-container">{result.bestTime}</p>
          </div>
          <div className="bg-tertiary-container/20 rounded-[24px] p-5 border border-tertiary-container/30">
            <span className="material-symbols-outlined text-tertiary mb-2 block">report_problem</span>
            <h4 className="text-[16px] font-bold text-tertiary mb-2">주의할 점</h4>
            <p className="text-[15px] leading-[1.6] text-on-tertiary-container">{result.caution}</p>
          </div>
        </div>

        {/* Best Mates */}
        <section className="space-y-4">
          <h3 className="text-[24px] font-bold leading-[1.3] text-primary flex items-center gap-2">
            <span className="material-symbols-outlined">groups</span>
            최고의 여행 메이트
          </h3>
          <div className="flex flex-col gap-3">
            {result.mates.map((mate) => (
              <div
                key={mate.type}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container text-[13px] shrink-0">
                  {mate.type}
                </div>
                <p className="text-[14px] leading-[1.5] text-on-surface-variant flex-1">
                  {mate.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <section className="space-y-4 pt-2">
          <a href="#">
            <button
              type="button"
              className="w-full h-14 rounded-2xl bg-primary text-white text-[18px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform cursor-pointer"
            >
              <span>WON트래블 이동하기</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => router.push('/test')}
              className="h-14 rounded-2xl bg-white border border-slate-200 text-on-surface-variant text-[12px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-all hover:border-slate-300 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">refresh</span>
              다시 테스트하기
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="h-14 rounded-2xl bg-white border border-slate-200 text-on-surface-variant text-[12px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-all hover:border-slate-300 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
              {shared ? '복사됐어요!' : '결과 공유하기'}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default function ResultPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-on-background">
      <div className="w-full max-w-[480px] mx-auto flex flex-col min-h-screen">
        <Suspense
          fallback={
            <div className="flex-grow flex items-center justify-center">
              <div className="text-on-surface-variant text-[16px]">결과를 불러오는 중...</div>
            </div>
          }
        >
          <ResultContent />
        </Suspense>
      </div>
    </div>
  )
}
