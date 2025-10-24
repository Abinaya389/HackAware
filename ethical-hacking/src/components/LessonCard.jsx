import React from 'react'

export default function LessonCard({ lesson, onOpen }) {
  const excerpt = lesson.en.slice(0, 120) + (lesson.en.length > 120 ? '...' : '')
  return (
    <div className="lesson-card">
      <h3>{lesson.title}</h3>
      <p className="small-muted">{excerpt}</p>
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <button className="btn secondary" onClick={() => onOpen(lesson.id)}>Read</button>
        <button className="btn" onClick={() => onOpen(lesson.id)}>Start Quiz</button>
      </div>
    </div>
  )
}
