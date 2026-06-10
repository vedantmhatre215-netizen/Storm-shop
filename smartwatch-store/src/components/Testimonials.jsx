import React from 'react';

export default function Testimonials() {
  const reviews = [
    { id: 1, name: "Sarah K.", review: "The battery life on the Apex Chrono is legendary. Lasted me a full 2-week trip without charging!", rating: "⭐⭐⭐⭐⭐" },
    { id: 2, name: "Marcus T.", review: "Excellent tracking accuracy for trail running. Highly recommend the Sport Pro.", rating: "⭐⭐⭐⭐⭐" }
  ];

  return (
    <div style={{ backgroundColor: '#f1f5f9', padding: '4rem 1rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '2rem' }}>What Our Customers Say</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        {reviews.map(r => (
          <div key={r.id} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <p style={{ fontStyle: 'italic', color: '#475569' }}>"{r.review}"</p>
            <h4 style={{ margin: '1rem 0 0.25rem 0' }}>{r.name}</h4>
            <div>{r.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}