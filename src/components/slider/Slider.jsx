import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination,Navigation,Scrollbar, A11y } from 'swiper/modules'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar';

import './slider.css'

//importing data
import {SliderProducts} from '../../data/products' 

export default function Slider() {
  return (
    <div className='s-container'>
        <Swiper
        className='mySwiper'
         modules={[Pagination,Navigation,Scrollbar, A11y]}
         slidesPerView={3}
         slidesPerGroup={1}
         spaceBetween={40}
         loop={true}
         navigation={true}
         breakpoints={{
          640:{
           slidesPerView:3
          },
          0:{
          slidesPerView:1
          }

         }}
         >
          {
            SliderProducts.map((slide,i)=>(
               <SwiperSlide>
                  <div className='left-s'>
                    <div className='name'>
                        <span>{slide.name}</span>
                        <span>{slide.detail}</span>
                    </div>
                    <span>${slide.price}</span>
                    <div>Shop Now</div>
                  </div>
                  <img src={slide.img} alt='product' className='img-p'></img>
               </SwiperSlide>
            ))
          }
            
        </Swiper>
    </div>
  )
}
