import { createContext, useState, useEffect} from "react";

import PRODUCTS from "../shop-data.json";

//storage
export const ProductsContext = createContext(
    {
        products: [],
        // setProducts: () => null
    }
);

//provider (deciding which components re-render on currentUser's change)
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};


    // useEffect(() => {
    //     const products = async () => {
    //         return await const response = fetch('').then(response.json());
    //     }  
    //         setProducts()
    //     });
    // }, []);

    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}