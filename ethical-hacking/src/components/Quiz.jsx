import React, { useState } from 'react'
import { lessons } from './data'
import { scoreLesson } from '../utils/quizUtils'

export default function Quiz({ lessonId, onBack }) {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const lesson = lessons.find(l => l.id === lessonId) || lessons[0]
  const questions = lesson.questions || []

  function select(idx, opt) {
    setAnswers(prev => ({ ...prev, [idx]: opt }))
  }

  function submit() {
    setShowResults(true)
    // store score using shared util
    const score = scoreLesson(lesson, answers)
    const all = JSON.parse(localStorage.getItem('scores')||'{}')
    all[lesson.id] = {score, at: Date.now()}
    localStorage.setItem('scores', JSON.stringify(all))
  }

  return (
    <section>
      <h2>Quiz — {lesson.title}</h2>
      <p>Answer the short questions. Results saved locally.</p>

      {questions.map((q, i) => (
        <div key={i} className="card" style={{textAlign:'left', marginBottom:8}}>
          <p><strong>{i+1}. {q.question}</strong></p>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            {q.options.map((opt, j) => (
              <button
                key={j}
                onClick={() => select(i, opt)}
                className={`btn ${answers[i]===opt? 'selected':''}`}
                style={{background: answers[i]===opt? undefined: undefined}}
              >{opt}</button>
            ))}
          </div>
          {showResults && (
            <div style={{marginTop:8}}>
              <strong>Explanation:</strong>
              <div>{q.explanation}</div>
            </div>
          )}
        </div>
      ))}

      <div style={{display:'flex', gap:8, marginTop:8}}>
        <button className="btn secondary" onClick={onBack}>Back</button>
        <button className="btn" onClick={submit}>Submit</button>
      </div>

      {showResults && (
        <div style={{marginTop:12}}>
          <h3>Results saved</h3>
          <p>Check the Survey / Progress section to see improvement over time.</p>
        </div>
      )}
    </section>
  )
}
