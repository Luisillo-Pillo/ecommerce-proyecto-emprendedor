import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./header.css"

export default function Header () {
    return(
        <div className="header-container">
            <div className="header-inter">
                <h1 className="header-logo">Plantitas.com</h1>
                <form action="">
                        <input type="text"  className="header-input" placeholder="Tienes algo en mente...?"/>
                        <button className="header-send"><FontAwesomeIcon icon={faMagnifyingGlass} className='icono'/></button>
                </form>
                <ul>
                    <li><a href="" className="list-element"><b>Inicio</b></a></li>
                    <li><a href="" className="list-element"><b>Hortalizas</b></a></li>
                    <li><a href="" className="list-element"><b>Herramientas</b></a></li>
                    <li><a href="" className="list-element"><b>Manuales</b></a></li>
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