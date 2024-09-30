
import React, { useState,useEffect  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductList from './components/ProductList';
import faceCreamImage from './assets/face-cream.jpg';
import sunscreenImage from './assets/sunscreen.jpg';
import serumImage from './assets/serum.jpg';
import bodyScrubImage from './assets/body-scrub.jpg';
import lotionImage from './assets/lotion.jpg';
import gelImage from './assets/shower-gel.jpg';
import hairOilImage from './assets/hair-oil.jpg';
import shampooImage from './assets/shampoo.jpg';
import hairMaskImage from './assets/mask.jpg';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1700 }); 
  }, []);
  const products = [
    { name: 'Hydrating Face Cream', category: 'Face', price: 25, image: faceCreamImage },
    { name: 'Sunscreen', category: 'Face', price: 30, image: sunscreenImage },
    { name: 'Serum', category: 'Face', price: 30, image: serumImage },
    { name: 'Body Scrub', category: 'Body', price: 15, image: bodyScrubImage },
    { name: 'Moisturizing Lotion', category: 'Body', price: 18, image: lotionImage },
    { name: 'Shower Gel', category: 'Body', price: 15, image: gelImage },
    { name: 'Hair Oil', category: 'Hair', price: 20, image: hairOilImage },
    { name: 'Shampoo', category: 'Hair', price: 22, image: shampooImage },
    { name: 'Hair Mask', category: 'Hair', price: 25, image: hairMaskImage },
  ];
  

  const [activeFilter, setActiveFilter] = useState('All');

  
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter).slice(0, 4); 

  return (
    <div className='section'> 
      <div className='container'>
      <h1 data-aos="fade-right">Glow & Care</h1>
      <p> Your All-in-One Beauty Solution</p>
      <div className="filter-section">
        <button onClick={() => setActiveFilter('All')}>All Products</button>
        <button onClick={() => setActiveFilter('Face')}>Face Products</button>
        <button onClick={() => setActiveFilter('Body')}>Body Products</button>
        <button onClick={() => setActiveFilter('Hair')}>Hair Products</button>
      </div>

    
      <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
