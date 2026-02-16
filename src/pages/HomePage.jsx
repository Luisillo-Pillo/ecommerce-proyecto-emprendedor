import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Descubre la Tecnología del Mañana</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;