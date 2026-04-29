'use client'

import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { questions, MbtiLetter } from '@/data/questions'
import { calculateMbti } from '@/lib/mbti'

export default function TestPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, MbtiLetter>>({})
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null)

  const question = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  const handleSelect = useCallback(
    (option: 'A' | 'B') => {
      if (selectedOption !== null) return

      const letter = option === 'A' ? question.optionA.value : question.optionB.value
      const newAnswers = { ...answers, [question.id]: letter }
      setSelectedOption(option)

      setTimeout(() => {
        if (isLastQuestion) {
          const mbti = calculateMbti(newAnswers)
          router.push(`/result?type=${mbti}`)
        } else {
          setAnswers(newAnswers)
          setCurrentIndex((i) => i + 1)
          setSelectedOption(null)
        }
      }, 380)
    },
    [selectedOption, question, answers, isLastQuestion, router]
  )

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1)
      setSelectedOption(null)
      const prev = { ...answers }
      delete prev[questions[currentIndex - 1].id]
      setAnswers(prev)
    } else {
      router.push('/')
    }
  }

  const handleClose = () => router.push('/')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  return (
    <div className="h-[100dvh] overflow-hidden flex flex-col items-center bg-background text-on-surface">
      <div className="w-full max-w-[480px] mx-auto flex flex-col h-full">

        <main className="flex-grow px-6 py-8 flex flex-col overflow-y-auto">
          {/* Progress */}
          <section className="mb-10" aria-label="진행 상황">
            <div className="flex justify-between items-end mb-3">
              <h2 className="text-[24px] font-bold leading-[1.3] text-primary">
                Q{currentIndex + 1} / {questions.length}
              </h2>
              <span className="text-[12px] font-bold tracking-[0.05em] text-secondary">
                진행도 {Math.round(((currentIndex + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={currentIndex + 1}
              aria-valuemin={1}
              aria-valuemax={questions.length}
              className="h-4 w-full bg-surface-container rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-secondary-container rounded-full shadow-[0px_0px_10px_rgba(188,237,220,0.5)] transition-all duration-500"
                style={{ width: `${Math.max(((currentIndex + 1) / questions.length) * 100, 8)}%` }}
              />
            </div>
          </section>

          {/* Question */}
          <section className="flex-grow flex flex-col items-center text-center">
            <div className="mb-10 w-full">
              {/* Category badge */}
              <div className="inline-block px-4 py-1 bg-tertiary-fixed rounded-full mb-6">
                <span className="text-[12px] font-bold tracking-[0.05em] text-on-tertiary-fixed-variant">
                  {question.category}
                </span>
              </div>

              {/* Question text */}
              <h1 className="text-[32px] font-extrabold leading-[1.2] text-on-surface mb-8 px-2">
                {question.text}
              </h1>

              {/* Visual */}
              <div
                className={`relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-sm bg-gradient-to-br ${question.gradient} flex flex-col items-center justify-center`}
                aria-hidden="true"
              >
                <span className="text-[80px] leading-none mb-2">{question.emoji}</span>
              </div>
            </div>

            {/* Options */}
            <div className="w-full flex flex-col gap-4 mb-10">
              {(['A', 'B'] as const).map((opt) => {
                const option = opt === 'A' ? question.optionA : question.optionB
                const isSelected = selectedOption === opt
                const isOther = selectedOption !== null && selectedOption !== opt

                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleSelect(opt)}
                    disabled={selectedOption !== null}
                    className={[
                      'group relative w-full p-6 text-left rounded-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] transition-all duration-200',
                      isSelected
                        ? 'bg-primary border-2 border-primary scale-[0.98]'
                        : isOther
                        ? 'bg-surface-container-lowest border-2 border-transparent opacity-50'
                        : 'bg-surface-container-lowest border-2 border-transparent hover:border-primary-container active:scale-[0.98]',
                    ].join(' ')}
                    aria-label={`${opt}: ${option.text} ${option.strong}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={[
                          'w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors',
                          isSelected
                            ? 'border-white bg-white'
                            : 'border-outline-variant group-hover:border-primary-container group-hover:bg-primary-container',
                        ].join(' ')}
                      >
                        <span
                          className={[
                            'text-[12px] font-bold transition-colors',
                            isSelected
                              ? 'text-primary'
                              : 'text-outline group-hover:text-white',
                          ].join(' ')}
                        >
                          {opt}
                        </span>
                      </div>
                      <p
                        className={[
                          'text-[16px] leading-snug transition-colors flex-1 min-w-0',
                          isSelected
                            ? 'text-on-primary'
                            : 'text-on-surface-variant group-hover:text-on-surface',
                        ].join(' ')}
                      >
                        {option.text}{' '}
                        <strong className={isSelected ? 'text-on-primary' : 'text-on-surface'}>
                          {option.strong}
                        </strong>
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
