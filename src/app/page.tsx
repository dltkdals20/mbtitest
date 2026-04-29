import Link from 'next/link'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-on-background">
      <div className="w-full max-w-[480px] mx-auto flex flex-col min-h-screen">

        <main className="flex-grow flex flex-col gap-8">
          {/* Hero Section */}
          <section className="relative px-6 pt-12 pb-4 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-primary-container/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 inline-flex items-center gap-2 bg-secondary-container/30 text-on-secondary-container px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.05em]">
                <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
                NEW TRAVEL CURE
              </div>
              <h2 className="text-[32px] font-extrabold leading-[1.2] text-on-background mb-4">
                MBTI 여행 처방전
              </h2>
              <p className="text-[16px] leading-[1.6] text-on-surface-variant max-w-[300px]">
                나의 MBTI 성향으로 알아보는<br />
                찰떡 여행지와 여행 스타일
              </p>
            </div>
          </section>

          {/* Visual Cards */}
          <section className="px-6" aria-hidden="true">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="aspect-square rounded-[32px] overflow-hidden shadow-lg border-4 border-white bg-gradient-to-br from-sky-100 to-blue-200 flex flex-col items-center justify-center transform -rotate-3">
                <span className="text-6xl mb-2" role="img" aria-label="비행기">✈️</span>
                <span className="text-[11px] font-bold text-sky-600 tracking-widest">EXPLORE</span>
              </div>
              {/* Card 2 */}
              <div className="aspect-square rounded-[32px] overflow-hidden shadow-lg border-4 border-white bg-gradient-to-br from-emerald-100 to-teal-200 flex flex-col items-center justify-center transform rotate-6 translate-y-4">
                <span className="text-6xl mb-2" role="img" aria-label="지구">🌏</span>
                <span className="text-[11px] font-bold text-teal-600 tracking-widest">TRAVEL</span>
              </div>
              {/* Floating compass */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-2xl shadow-xl z-20">
                <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  explore
                </span>
              </div>
            </div>
          </section>

          {/* Description Card */}
          <section className="px-6 mt-4">
            <div className="glass-card rounded-[32px] p-6 text-center shadow-[0px_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <div className="w-2 h-2 rounded-full bg-primary-container" />
                <div className="w-2 h-2 rounded-full bg-tertiary-container" />
              </div>
              <p className="text-[16px] leading-relaxed text-on-surface-variant">
                3분이면 충분해요.
              </p>
              <p className="text-[16px] leading-relaxed text-on-surface-variant mt-1">
                나에게 맞는{' '}
                <strong className="text-on-surface">여행지, 호텔,</strong>
                <br />
                <strong className="text-on-surface">여행 시기, 여행 궁합</strong>까지
                <br />
                완벽하게 추천해드려요.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 pb-12">
            <Link href="/test" className="block">
              <button
                type="button"
                className="w-full h-[64px] bg-primary text-on-primary rounded-full text-[18px] font-bold shadow-[0px_15px_35px_rgba(66,97,125,0.2)] active:scale-95 transition-transform flex items-center justify-center gap-3 cursor-pointer"
              >
                여행 성향 테스트 시작하기
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
