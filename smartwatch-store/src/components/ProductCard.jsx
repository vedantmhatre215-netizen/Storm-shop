import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#2563eb', fontWeight: 'bold', marginBottom: '0.5rem' }}>{product.category}</span>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{product.name}</h3>
        <p style={{ color: '#64748b', fontSize: '0.9rem', flexGrow: 1, margin: '0 0 1.5rem 0' }}>{product.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a' }}>${product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}