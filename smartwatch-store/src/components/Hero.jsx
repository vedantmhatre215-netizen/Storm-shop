import React from 'react';

export default function Hero({ onExplore }) {
  return (
    <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: '#fff', padding: '5rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Future of Time on Your Wrist</h1>
      <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        Discover high-performance smartwatches designed to match your hustle, fitness goals, and elegant lifestyle.
      </p>
      <button 
        onClick={onExplore}
        style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '0.8rem 2rem', fontSize: '1rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Shop Latest Arrivals
      </button>
    </div>
  );
}