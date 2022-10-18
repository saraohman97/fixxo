import React from "react";
import ProductpageFilter from "../components/ProductPageFilter";
import './ProductPage.css'
import ProductPageListings from "../components/ProductPageListings";

const ProductPage = () => {

    return(
        <div className="product-page">
            <ProductpageFilter />
            <ProductPageListings />
        </div>  
    )
}




export default ProductPage;