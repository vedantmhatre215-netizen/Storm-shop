import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import { products } from '../data/products';

export default function Home({ setCurrentTab, addToCart }) {
  // Show just the top 3 featured items on homepage
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <Hero onExplore={() => setCurrentTab('products')} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Featured Smartwatches</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <Testimonials />
    </div>
  );
}