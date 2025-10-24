// Utility functions for scoring quizzes
export function scoreLesson(lesson, answers){
  // answers: { [questionIndex]: chosenOption }
  const questions = lesson.questions || []
  if(questions.length === 0) return 0
  let correct = 0
  questions.forEach((q, i) => {
    const chosen = answers[i]
    if(chosen === undefined) return
    if(q.options[q.correctIndex] === chosen) correct++
  })
  return Math.round((correct / questions.length) * 100)
}

export function scoreAllLessons(lessons, answersPerLesson){
  // answersPerLesson: { [lessonId]: { [qIndex]: chosenOption } }
  let totalCorrect = 0
  let totalQuestions = 0
  lessons.forEach(lesson => {
    const qs = lesson.questions || []
    qs.forEach((q, i) => {
      totalQuestions++
      const chosen = answersPerLesson[lesson.id] && answersPerLesson[lesson.id][i]
      if(chosen && q.options[q.correctIndex] === chosen) totalCorrect++
    })
  })
  if(totalQuestions === 0) return 0
  return Math.round((totalCorrect / totalQuestions) * 100)
}
