import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  const renderPage = () => {
    switch (currentTab) {
      case 'home':
        return <Home setCurrentTab={setCurrentTab} addToCart={addToCart} />;
      case 'products':
        return <Products addToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentTab={setCurrentTab} addToCart={addToCart} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} cartCount={cart.length} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;