import React from 'react'
import './styles/ProductPage.css'
import ProductpageFilter from "../components/products/ProductPageFilter";
import ProductPageListings from "../components/products/ProductPageListings";
import SecondNavbar from '../components/navbar/SecondNavbar';

const ProductPage = () => {
    return(
        <>
        <div className="product-page">
            <ProductpageFilter />
            <ProductPageListings />
        </div>
        </>
    )
}




export default ProductPage;