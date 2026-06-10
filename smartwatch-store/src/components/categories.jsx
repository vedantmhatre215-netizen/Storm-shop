import React from 'react';
import { categories } from '../data/products';

export default function Categories({ activeCategory, setActiveCategory }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0', flexWrap: 'wrap' }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          style={{
            padding: '0.5rem 1.5rem',
            borderRadius: '25px',
            border: '1px solid #cbd5e1',
            cursor: 'pointer',
            fontWeight: '600',
            backgroundColor: activeCategory === cat ? '#2563eb' : '#fff',
            color: activeCategory === cat ? '#fff' : '#475569',
            transition: 'all 0.2s'
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}