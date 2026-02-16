import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <div className="container"><p>Cargando perfil...</p></div>;
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <button onClick={() => navigate(-1)} className="back-button" aria-label="Regresar a la página anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <h1>Mi Perfil</h1>
        
        <div className="profile-info">
          <h3><b>Nombre: </b>{user.name}</h3>
          <p><b>Correo Electrónico:</b> {user.email}</p>
        </div>

        <div className="profile-actions">
          <Link to="/cart" className="profile-link-button">
            Ver mi Carrito ({totalItems})
          </Link>
          
          <button onClick={handleLogout} className="profile-logout-button">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;