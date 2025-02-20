import PropTypes from "prop-types";

export const Product = ({ id, image, title, price, description, onAddItemToCart }) => {
    return (
        <article className="product">
            <img src={image} alt={`foto ${title}`} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">{price} ZŁ</p>
                    <p>{description}</p>
                </div>
                <p className="product-actions">
                    <button onClick={() => onAddItemToCart(id)}>Dodaj do koszyka</button>
                </p>
            </div>
        </article>
    );
};

Product.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    onAddItemToCart: PropTypes.func,
}