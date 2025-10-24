import React, { useState, useEffect } from 'react'

const ITEMS = [
  'Enable updates',
  'Don\'t install unknown apps',
  'Review app permissions',
  'Use strong PIN & 2FA',
  'Avoid public Wi‑Fi'
]

export default function Checklist(){
  const [checked, setChecked] = useState({})

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('checklist')||'{}')
    setChecked(saved)
  },[])

  useEffect(()=>{
    localStorage.setItem('checklist', JSON.stringify(checked))
  },[checked])

  function toggle(i){
    setChecked(prev=> ({...prev, [i]: !prev[i]}))
  }

  return (
    <section>
      <h2>Checklist — 5 safety steps</h2>
      <ul style={{textAlign:'left'}}>
        {ITEMS.map((t,i)=> (
          <li key={i} style={{marginBottom:8}}>
            <label>
              <input type="checkbox" checked={!!checked[i]} onChange={()=>toggle(i)} /> {t} {checked[i] ? ' ✅':''}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
