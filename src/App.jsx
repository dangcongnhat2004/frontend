import React, { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'

export default function App() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ title: '', rating: 5, category: 'FOOD', content: ''})

  useEffect(() => {
    fetch(`${API_BASE}/api/reviews`)
      .then(r => r.json())
      .then(setReviews)
      .catch(console.error)
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    await fetch(`${API_BASE}/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await (await fetch(`${API_BASE}/api/reviews`)).json()
    setReviews(data)
    setForm({ title: '', rating: 5, category: 'FOOD', content: ''})
  }

  return (
    <div style={{maxWidth: 980, margin: '40px auto', fontFamily: 'system-ui, sans-serif'}}>
      <h1>Kotonoha（言の葉）— Travel & Food Reviews</h1>
      <form onSubmit={submit} style={{display:'grid', gap:12, margin:'20px 0'}}>
        <input placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required/>
        <select value={form.category} onChange={e=>setForm({...form, category:e.target.value})}>
          <option>FOOD</option>
          <option>TRAVEL</option>
          <option>DRINKS</option>
          <option>CAFE</option>
          <option>BOOKS</option>
          <option>OTHER</option>
        </select>
        <input type="number" min="1" max="5" value={form.rating} onChange={e=>setForm({...form, rating:+e.target.value})}/>
        <textarea placeholder="Content" value={form.content} onChange={e=>setForm({...form, content:e.target.value})}/>
        <button type="submit">Submit Review</button>
      </form>
      <h2>Recent Reviews</h2>
      <ul style={{listStyle:'none', padding:0, display:'grid', gap:10}}>
        {reviews.map(r => (
          <li key={r.id} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
            <div style={{fontWeight:600}}>{r.title}</div>
            <div>Category: {r.category} • ⭐ {r.rating}</div>
            <p>{r.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
