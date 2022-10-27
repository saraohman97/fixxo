import React from 'react'
import { Pagination } from "swiper";
import SmallSalesCard from './SmallSalesCard.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import useWindowDimensions from '../../hooks/useWindowWidth.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const BestSellingSection = () => {

  const { height, width } = useWindowDimensions();

  return (
    <div className='selling-section'>
      <div className='top-selling-section'>
        <h5 className='selling-title'>Latest Product</h5>
      {width > 768 ?
        <div className='small-sales-card'>
          <SmallSalesCard />
          <SmallSalesCard />
          <SmallSalesCard />
        </div> :
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper small-sales-card">
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
      </Swiper>
        }

      </div>
      <div className='top-selling-section'>
        <h5 className='selling-title'>Best Selling Product</h5>
        {width > 768 ?
        <div className='small-sales-card'>
          <SmallSalesCard />
          <SmallSalesCard />
          <SmallSalesCard />
        </div> :
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper small-sales-card">
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
      </Swiper>
        }
      </div>
      <div className='top-selling-section'>
        <h5 className='selling-title'>Top Reacted Product</h5>
        {width > 768 ?
        <div className='small-sales-card'>
          <SmallSalesCard />
          <SmallSalesCard />
          <SmallSalesCard />
        </div> :
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper small-sales-card">
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
        <SwiperSlide><SmallSalesCard /></SwiperSlide>
      </Swiper>
        }
      </div>
    </div>
  )
}

export default BestSellingSection