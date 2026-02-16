import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="categories-page-container">
      <h1>Explora por Categorías</h1>
      
      {categories.map(category => {
        const categoryProducts = products.filter(product => product.category === category);

        return (
          <section key={category} className="category-section">
            <h2>{category}</h2>
            <div className="product-grid">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default CategoriesPage;