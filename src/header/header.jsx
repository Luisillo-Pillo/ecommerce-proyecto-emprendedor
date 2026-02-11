import "./header.css"

export default function Header () {
    return(
        <div className="header-container">
            <div className="header-inter">
                <h1 className="header-logo">Plantitas.com</h1>
                <div>
                    <form action="">
                        <input type="text"  className="header-input" placeholder="Tienes algo en mente...?"/>
                        <button className="header-send">Send</button>
                    </form>
                    <ul>
                        <li><a href="" className="list-element"><b>Inicio</b></a></li>
                        <li><a href="" className="list-element"><b>Hortalizas</b></a></li>
                        <li><a href="" className="list-element"><b>Herramientas</b></a></li>
                        <li><a href="" className="list-element"><b>Manuales</b></a></li>
                    </ul>
                </div>
                <div>
                    <button className="login">Log in</button>
                    <button className="singup">Sing up</button>
                </div>
                <button className="header-cart">Cart</button>
            </div>
        </div>
    );
};