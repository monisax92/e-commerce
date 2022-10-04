import Button from "../Button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({product}) => {

    const {author, title, image, price} = product;

    return(
        <div className="product-card-container">
            <img src={image} alt={`cover of "${title}"`}/>
            <div className="footer">
                <span className="book-title">{title}</span>
                <span className="book-author">{author}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="inverted" label="Add to card"/>
        </div>
    );
}

export default ProductCard;