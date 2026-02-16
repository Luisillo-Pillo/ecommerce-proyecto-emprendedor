import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPlantWilt } from '@fortawesome/free-solid-svg-icons'
import "./footer.css"

export default function Footer () {
    return(
        <div className="footer-container">
            <div className="footer-content">
                <h1 className="logo footer-logo">Plantitas.com</h1>
                <ul className='footer-menu'>
                    <li className='footer-menu-element'><a href="">Inicio</a></li>
                    <li className='footer-menu-element'><a href="">Hortalizas</a></li>
                    <li className='footer-menu-element'><a href="">Herramientas</a></li>
                    <li className='footer-menu-element'><a href="">Kits</a></li>
                </ul>
                <ul className='footer-menu'>
                    <li className='footer-menu-element'><a href="">Nuestro objetivo</a></li>
                    <li className='footer-menu-element'><a href="">Misión y Visión</a></li>
                    <li className='footer-menu-element'><a href="">Atención al Cliente</a></li>
                    <li className='footer-menu-element'><a href="">Cookies</a></li>
                </ul>
                <ul className='footer-menu'>
                    <li className='footer-menu-element'><a href="">Categorías</a></li>
                    <li className='footer-menu-element'><a href="">449 260 9175</a></li>
                    <li className='footer-menu-element'><a href="">luisfer.andradesan@gmail.com</a></li>
                    <li className='footer-menu-element'>
                        <FontAwesomeIcon icon={faWhatsapp} className='footer-menu-element'/>
                        <FontAwesomeIcon icon={faXTwitter} className='footer-menu-element'/>
                        <FontAwesomeIcon icon={faInstagram} className='footer-menu-element'/>
                        <FontAwesomeIcon icon={faFacebook} className='footer-menu-element'/>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faPlantWilt} className='plantita footer-plantita'/>
            </div>
            <div className='down-footer-container'>
                <p>© 2026 plantitas.com. Todos los derechos reservados.</p>
            </div>
        </div>
    );
};