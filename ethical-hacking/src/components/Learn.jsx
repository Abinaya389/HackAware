import React, { useState } from 'react'
import { lessons } from './data'
import LessonCard from './LessonCard'

export default function Learn({ onStartQuiz }) {
  const [openId, setOpenId] = useState(null)

  function openLesson(id) {
    setOpenId(id)
  }

  const lesson = lessons.find(l => l.id === openId)

  return (
    <section>
      <h2>Learn — short lessons (Tamil / English)</h2>
      <p>Each topic is a small 2–3 minute read. Tap a lesson to open it.</p>

      {!lesson && (
        <div>
          {lessons.map(l => (
            <LessonCard key={l.id} lesson={l} onOpen={openLesson} />
          ))}
        </div>
      )}

          {lesson && (
            <article className="card" style={{textAlign:'left'}}>
              <h3>{lesson.title}</h3>
              <h4>English</h4>
              <p>{lesson.en}</p>
              <h4>Tamil</h4>
              <p>{lesson.ta}</p>
              <div style={{display:'flex',gap:8}}>
                <button className="btn secondary" onClick={() => setOpenId(null)}>Back</button>
                <button className="btn" onClick={() => onStartQuiz(lesson.id)}>Start Quiz</button>
              </div>
            </article>
          )}
    </section>
  )
}
