import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './ProductCard.css'

const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
    }).format(price);
};

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext)
    const { isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if(!isAuthenticated) {
            navigate('/login');
            return;
        }
        addToCart(product);
    };

    return(
        <div className='productCard-container'>
            <div className='productCard-image'>
                <img src={product.image} alt={product.name} className='productCard-img'/>
            </div>
            <div className='productCard-info'>
                <h3>{product.name}</h3>
                <p className='productCard-price'>{formatPrice(product.price)}</p>
            </div>
            <div className='productCard-actions'>
                <Link to={`/product/${product.id}`} className='button-detail'>Ver Detalle</Link>
                <button onClick={handleAddToCart}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ProductCard;