import React, { useState, useEffect } from 'react'
import { lessons } from './data'

// Simple pre/post test using one question per lesson
function runQuickTest(answers){
  // answers: {lessonId: index of chosen option}
  let correct = 0
  lessons.forEach((l)=>{
    const q = l.questions && l.questions[0]
    if(!q) return
    const chosen = answers[l.id]
    if(chosen === undefined) return
    if(q.options[q.correctIndex] === chosen) correct++
  })
  const total = lessons.length
  return Math.round((correct / total) * 100)
}

export default function Survey(){
  const [preAnswers, setPreAnswers] = useState({})
  const [postAnswers, setPostAnswers] = useState({})
  const [preScore, setPreScore] = useState(null)
  const [postScore, setPostScore] = useState(null)

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('survey')||'{}')
    if(saved.preAnswers) setPreAnswers(saved.preAnswers)
    if(saved.postAnswers) setPostAnswers(saved.postAnswers)
    if(saved.preScore!==undefined) setPreScore(saved.preScore)
    if(saved.postScore!==undefined) setPostScore(saved.postScore)
  },[])

  function answer(setter, id, value){
    setter(prev=> ({...prev, [id]: value}))
  }

  function submitPre(){
    const score = runQuickTest(preAnswers)
    setPreScore(score)
    localStorage.setItem('survey', JSON.stringify({...JSON.parse(localStorage.getItem('survey')||'{}'), preAnswers, preScore: score}))
  }

  function submitPost(){
    const score = runQuickTest(postAnswers)
    setPostScore(score)
    localStorage.setItem('survey', JSON.stringify({...JSON.parse(localStorage.getItem('survey')||'{}'), postAnswers, postScore: score}))
  }

  const improvement = (preScore!==null && postScore!==null) ? Math.max(0, postScore - preScore) : null

  return (
    <section>
      <h2>Survey / Progress</h2>
      <p>Take a quick pre-test before learning and a post-test after to measure improvement.</p>
      <article className="card" style={{textAlign:'left'}}>
        <h3>Pre-test</h3>
        {lessons.map((l,idx)=> (
          <div key={l.id} style={{marginBottom:8}}>
            <div><strong>{idx+1}. {l.title}</strong></div>
            {l.questions && l.questions[0].options.map((opt,j)=> (
              <label key={j} style={{display:'block'}}>
                <input type="radio" name={"pre"+l.id} checked={preAnswers[l.id]===opt} onChange={()=> answer(setPreAnswers, l.id, opt)} /> {opt}
              </label>
            ))}
          </div>
        ))}
        <button className="btn" onClick={submitPre}>Submit Pre-test</button>
        {preScore!==null && <div>Pre-test score: {preScore}%</div>}
      </article>

      <article className="card" style={{textAlign:'left', marginTop:12}}>
        <h3>Post-test</h3>
        {lessons.map((l,idx)=> (
          <div key={l.id} style={{marginBottom:8}}>
            <div><strong>{idx+1}. {l.title}</strong></div>
            {l.questions && l.questions[0].options.map((opt,j)=> (
              <label key={j} style={{display:'block'}}>
                <input type="radio" name={"post"+l.id} checked={postAnswers[l.id]===opt} onChange={()=> answer(setPostAnswers, l.id, opt)} /> {opt}
              </label>
            ))}
          </div>
        ))}
        <button className="btn" onClick={submitPost}>Submit Post-test</button>
        {postScore!==null && <div>Post-test score: {postScore}%</div>}
      </article>

      {improvement!==null && (
        <div style={{marginTop:12}}>
          <h3>Improvement</h3>
          <p>Improved by {improvement}%</p>
        </div>
      )}
    </section>
  )
}
