import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import './CheckoutPage.css';

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(price);
};

const CheckoutPage = () => {
  const { user } = useContext(AuthContext);
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [shippingAddress, setShippingAddress] = useState(() => {
    const savedAddress = localStorage.getItem('shippingAddress');
    return savedAddress || '';
  });
  const [isEditingAddress, setIsEditingAddress] = useState(!localStorage.getItem('shippingAddress'));
  const [message, setMessage] = useState('');

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!shippingAddress) {
      setMessage('Por favor, ingresa una dirección de envío.');
      return;
    }
    
    clearCart();
    navigate('/confirmation', { state: { total: totalPrice } });
  };

  const handleSaveAddress = () => {
    if (shippingAddress.trim()) {
      localStorage.setItem('shippingAddress', shippingAddress);
      setIsEditingAddress(false);
      setMessage('Dirección guardada para futuras compras.');
    } else {
      setMessage('Por favor, ingresa una dirección antes de guardar.');
    }
  };
  
  const handleEditAddress = () => {
    setIsEditingAddress(true);
  };

  if (!user) {
    return <div className="container"><h2>Debes iniciar sesión para ver esta página.</h2></div>;
  }

  return (
    <div className="container">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <form onSubmit={handleCheckout} className="checkout-form">
          <h2>Información de Envío</h2>
          {/* --- CAMBIO AÑADIDO: Mostrar notificaciones no intrusivas --- */}
          {message && <p className="notification-message">{message}</p>}
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Correo:</strong> {user.email}</p>
          <div className="form-group">
            <label>Dirección de Envío</label>
            {isEditingAddress ? (
              <>
                <input
                  type="text"
                  className="address-input"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Ej. Calle Principal #123, Colonia, Ciudad"
                  required
                />
                <button type="button" onClick={handleSaveAddress} className="save-address-button">
                  Guardar Dirección
                </button>
              </>
            ) : (
              <div className="saved-address-container">
                <p className="saved-address-text">{shippingAddress}</p>
                <svg className="saved-address-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <button type="button" onClick={handleEditAddress} className="edit-address-button">
                  Cambiar Dirección
                </button>
              </div>
            )}
          </div>
          <div className="form-actions">
            <button type="button" onClick={() => navigate('/')} className="secondary-button">
              Volver a la Tienda
            </button>
            <button type="submit" className="primary-button">Confirmar Compra</button>
          </div>
        </form>
        <div className="checkout-summary">
          <h2>Resumen del Pedido</h2>
          <p><b>Total de productos: </b>{totalQuantity}</p>
          <p><b>Total a pagar: </b>{formatPrice(totalPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;