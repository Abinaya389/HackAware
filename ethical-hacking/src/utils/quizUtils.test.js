import { describe, it, expect } from 'vitest'
import { scoreLesson, scoreAllLessons } from './quizUtils'

const sampleLesson = {
  id: 'l1',
  questions: [
    { options: ['Yes','No'], correctIndex: 1 },
    { options: ['A','B'], correctIndex: 0 }
  ]
}

describe('quizUtils', () => {
  it('scores a single lesson correctly', () => {
    const answers = { 0: 'No', 1: 'A' }
    const score = scoreLesson(sampleLesson, answers)
    expect(score).toBe(100)
  })

  it('handles partial answers', () => {
    const answers = { 0: 'No' }
    const score = scoreLesson(sampleLesson, answers)
    expect(score).toBe(50)
  })

  it('scores multiple lessons', () => {
    const lessons = [sampleLesson]
    const answersPerLesson = { l1: { 0: 'No', 1: 'B' } }
    const overall = scoreAllLessons(lessons, answersPerLesson)
    // one correct out of 2 => 50%
    expect(overall).toBe(50)
  })
})
