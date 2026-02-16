import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import './ProductCard.css';

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(price);
};

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img src={product.image} alt={product.name} className="product-card-image" />
      </div>
      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p className="product-card-price">{formatPrice(product.price)}</p>
      </div>
      <div className="product-card-actions">
        <Link to={`/product/${product.id}`} className="button-detail">Ver Detalle</Link>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;