import React, { useState } from 'react';
import Categories from '../components/categories'; //  Lowercase 'c'
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>Explore Our Collection</h1>
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}