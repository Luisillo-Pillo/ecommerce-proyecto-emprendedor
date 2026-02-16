import React, { useContext, useMemo, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(price);
};

const CartPage = () => {
  const { cartItems, clearCart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const handleIncrement = useCallback((productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1);
  }, [updateQuantity]);

  const handleDecrement = useCallback((productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  }, [updateQuantity]);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-wrapper">
        <h1>Tu Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <button onClick={() => navigate('/')}>
          Volver a la Tienda
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Tu Carrito</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{formatPrice(item.price)}</p>
              </div>
              
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button 
                    onClick={() => handleDecrement(item.id, item.quantity)}
                    className="quantity-button"
                    aria-label="Restar producto"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => handleIncrement(item.id, item.quantity)}
                    className="quantity-button"
                    aria-label="Sumar producto"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-icon-button" aria-label="Eliminar producto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Resumen de la Compra</h2>
          <p className="cart-total">Total: {formatPrice(totalPrice)}</p>
          <div className="cart-summary-actions">
            <Link to="/checkout" className="button-checkout">Proceder al Checkout</Link>
            <button onClick={clearCart} className="button-clear">Vaciar Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;