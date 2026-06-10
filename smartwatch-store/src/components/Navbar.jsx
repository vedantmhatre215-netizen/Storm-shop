import React from 'react';

export default function Navbar({ currentTab, setCurrentTab, cartCount }) {
  return (
    <nav style={{ backgroundColor: '#0f172a', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
      <h2 style={{ margin: 0, color: '#3b82f6', cursor: 'pointer' }} onClick={() => setCurrentTab('home')}>⌚ ChronoStore</h2>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <span style={{ cursor: 'pointer', fontWeight: currentTab === 'home' ? 'bold' : 'normal' }} onClick={() => setCurrentTab('home')}>Home</span>
        <span style={{ cursor: 'pointer', fontWeight: currentTab === 'products' ? 'bold' : 'normal' }} onClick={() => setCurrentTab('products')}>Products</span>
        <span style={{ cursor: 'pointer', fontWeight: currentTab === 'about' ? 'bold' : 'normal' }} onClick={() => setCurrentTab('about')}>About</span>
        <span style={{ cursor: 'pointer', fontWeight: currentTab === 'contact' ? 'bold' : 'normal' }} onClick={() => setCurrentTab('contact')}>Contact</span>
        
        <div style={{ backgroundColor: '#2563eb', padding: '0.5rem 1rem', borderRadius: '20px', display: 'flex', gap: '0.5rem', fontWeight: 'bold' }}>
          🛒 <span>{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}