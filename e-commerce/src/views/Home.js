import React from 'react'
import BestSellingSection from '../components/BestSellingSection'
import FlashSaleShowcase from '../components/FlashSaleShowcase'
import InfoCircles from '../components/InfoCircles'
import ProductSales from '../components/ProductSales'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <ProductSales />
      <FlashSaleShowcase />
      <BestSellingSection />
      <div className='section-divider'></div>
      <div className='info-circles'>
        <InfoCircles icon={'/img/customer-service.svg'} title={'Customer Support'} text={'Village did removed enjoyed explain talking.'} />
        <InfoCircles icon={'/img/credit-card (1).svg'} title={'Secured Payment'} text={'Village did removed enjoyed explain talking.'} />
        <InfoCircles icon={'/img/delivery-truck.svg'} title={'Free Home Delivery'} text={'Village did removed enjoyed explain talking.'} />
        <InfoCircles icon={'/img/delivery-truck.svg'} title={'30 Day Reuters'} text={'Village did removed enjoyed explain talking.'} />
      </div>

    </div>

  )
}

export default Home