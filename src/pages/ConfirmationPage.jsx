import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import './ConfirmationPage.css';

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(price);
};

const ConfirmationPage = () => {
  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state?.total || 0;

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="container confirmation-page">
      <h1>¡Gracias por tu compra, {user?.name || 'Cliente'}!</h1>
      <p>Tu pedido ha sido procesado con éxito.</p>
      <p>Recibirás un correo de confirmación en <b>{user?.email}</b>.</p>
      <div className="confirmation-summary">
        <h2>Resumen de la Compra</h2>
        <p>Total Pagado: <b>{formatPrice(total)}</b></p>
      </div>
      <button onClick={() => navigate('/')}>Volver a la Tienda</button>
    </div>
  );
};

export default ConfirmationPage;