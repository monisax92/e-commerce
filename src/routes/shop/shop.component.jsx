import { useContext } from "react";
import ProductCard from "../../components/ProductCard/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.styles.scss";


const Shop = () => {

    const {products} = useContext(ProductsContext);

    return(
        <div className="products-container">
            {products.map((product) => {
                console.log(product.image);
                return <ProductCard key={product.ibsn} product={product}/>
            })}
        </div>
    )
}

export default Shop;