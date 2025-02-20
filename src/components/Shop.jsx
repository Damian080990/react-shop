import PropTypes from "prop-types";
import { PRODUCTS_MOCK } from "../products-mock"
import { Product } from "./Product"

export const Shop = ({ onAddItemToCart }) => {
    return (
        <section id="shop">
            <h2>Anwil Włocławek Fan Corner</h2>

            <ul id="products">
                {PRODUCTS_MOCK.map((product) =>
                    <Product key={product.id} {...product} onAddItemToCart={onAddItemToCart} />
                )}
            </ul>
        </section>
    );
};

Shop.propTypes = {
    onAddItemToCart: PropTypes.func,
}