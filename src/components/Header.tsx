import Link from 'next/link'

interface HeaderProps {
  variant?: 'default' | 'test'
  onBack?: () => void
  onClose?: () => void
  stepLabel?: string
}

export default function Header({
  variant = 'default',
  onBack,
  onClose,
  stepLabel,
}: HeaderProps) {
  if (variant === 'test') {
    return (
      <header className="bg-[#F8F9FA]/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-[0px_4px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-[480px] mx-auto w-full px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            aria-label="뒤로 가기"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100/70 transition-colors"
          >
            <span className="material-symbols-outlined text-slate-800">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-lg font-extrabold text-slate-900 leading-tight">MBTI 여행 처방전</span>
            {stepLabel && (
              <span className="text-[10px] font-bold text-[#A7C7E7] tracking-[0.2em] uppercase">
                {stepLabel}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100/70 transition-colors"
          >
            <span className="material-symbols-outlined text-slate-800">close</span>
          </button>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-[#F8F9FA]/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-[0px_4px_20px_rgba(0,0,0,0.02)] w-full">
      <div className="max-w-[480px] mx-auto w-full px-6 py-4 flex items-center justify-between">
        <span className="material-symbols-outlined text-[#A7C7E7]">travel_explore</span>
        <Link href="/">
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight">MBTI 여행 처방전</h1>
        </Link>
        <span className="material-symbols-outlined text-[#A7C7E7]">account_circle</span>
      </div>
    </header>
  )
}
