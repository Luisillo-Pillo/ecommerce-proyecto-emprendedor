import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './BrandsPage.css';

const BrandsPage = () => {
  const brands = [...new Set(products.map(product => product.brand))];

  return (
    <div className="brands-page-container">
      <h1>Explora por Marcas</h1>
      
      {brands.map(brand => {
        const brandProducts = products.filter(product => product.brand === brand);

        return (
          <section key={brand} className="brand-section">
            <h2>{brand}</h2>
            <div className="product-grid">
              {brandProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default BrandsPage;