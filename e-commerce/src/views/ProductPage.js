import React from 'react'
import './styles/ProductPage.css'
import ProductpageFilter from "../components/products/ProductPageFilter";
import ProductPageListings from "../components/products/ProductPageListings";
import SecondNavbar from '../components/navbar/SecondNavbar';

const ProductPage = () => {
    return(
        <>
        <SecondNavbar />
        <div className="product-page-breadcrumbs"><i className="fa-solid fa-house"></i> Categories <i className="fa-solid fa-chevron-right"></i> Product Page</div>
        <div className="product-page">
            <ProductpageFilter />
            <ProductPageListings />
        </div>
        </>
    )
}




export default ProductPage;