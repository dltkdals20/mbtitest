import { questions, MbtiLetter } from '@/data/questions'

export function calculateMbti(answers: Record<number, MbtiLetter>): string {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }

  Object.entries(answers).forEach(([id, letter]) => {
    scores[letter]++
  })

  // 3 questions per axis, so no ties possible
  return [
    scores.E >= scores.I ? 'E' : 'I',
    scores.S >= scores.N ? 'S' : 'N',
    scores.T >= scores.F ? 'T' : 'F',
    scores.J >= scores.P ? 'J' : 'P',
  ].join('')
}

export const TOTAL_QUESTIONS = questions.length
