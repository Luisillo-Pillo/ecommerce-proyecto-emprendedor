import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPlantWilt } from '@fortawesome/free-solid-svg-icons'
import "./header.css"

export default function Header () {
    return(
        <div className="header-container">
            <div className="header-inter">
                <div className='header-logo'>
                    <FontAwesomeIcon icon={faPlantWilt} className='plantita'/>
                    <h1 className="logo">Plantitas.com</h1>
                </div>
                <form action="">
                        <input type="text"  className="header-input" placeholder="Tienes algo en mente...?"/>
                        <button className="header-send"><FontAwesomeIcon icon={faMagnifyingGlass} className='icono'/></button>
                </form>
                <ul className='header-menu'>
                    <li><a href="" className="header-list-element"><b>Inicio</b></a></li>
                    <li><a href="" className="header-list-element"><b>Hortalizas</b></a></li>
                    <li><a href="" className="header-list-element"><b>Herramientas</b></a></li>
                    <li><a href="" className="header-list-element"><b>Manuales</b></a></li>
                </ul>
                <div>
                    <button className="login"><b>Log in</b></button>
                    <button className="singup"><b>Sing up</b></button>
                </div>
                <button className="header-cart"><FontAwesomeIcon icon={faCartArrowDown} className='icono'/></button>
            </div>
        </div>
    );
};