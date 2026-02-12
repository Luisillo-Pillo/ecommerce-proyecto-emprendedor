import { products } from "../productos";
import "./productCard.css"

export default function ProductCard () {
    return(
        <div>
            <div>
                <h3>{products.id}id</h3>
            </div>
        </div>
    );
};