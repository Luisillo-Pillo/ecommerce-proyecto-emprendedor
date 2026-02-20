import "./layout.css"
import ProductCard from "../productCard/ProductCard.jsx";
import { products } from "../../products.js";

export default function Layout () {
    return(
        <div className="layout-container">
            <div className="layout-content">
                <div className="most-popular">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3zlT-BBFhnmDbA2cHQoCAJNm8NbapRBq2v9Nip_OTlG14Vd3Qxj-h_9j9FIBjoDznU4ALyl4gp0HyYIG_c5XCAm056FI_x9XgvEBO5gCfw&s=10" alt="Imagen no disponible" />
                    <h2>¡Más Popular!</h2>
                </div>
                <div className="productos-container">
                    <div>
                        {products.map((producto) => (
                            <ProductCard key={producto.id} product={producto} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};