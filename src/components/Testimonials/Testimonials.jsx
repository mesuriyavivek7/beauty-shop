import React from 'react'

import css from './testimonials.module.css'

import {Swiper,SwiperSlide} from 'swiper/react'
//import images
import Hero from '../../assets/testimonialHero.png'
import {TestimonialsData} from '../../data/testimonials'

export default function Testimonials() {
  return (
    <div className={css.testimonials}>
         <div className={css.wrapper}>
            <div className={css.container}>
              <span>Top Rated</span>
              <span>
                  Speedily Says has suitable disposal and boy. Exersice joy man children rejected
              </span>
            </div>
         

          <img src={Hero} alt=''></img>

           <div className={css.container}>
            <span>100k</span>
            <span>Happy Customres With Us</span>
           </div>
        </div>

        <div className={css.reviews}>
            Reviews
        </div>

        <div className={css.carousal}>
            <Swiper 
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousal}
            breakpoints={{
              856:{
                slidesPerView:3
              },
              640:{
                slidesPerView:2
              },
              0:{
                slidesPerView:1
              }
            }}
            >
             {
                TestimonialsData.map((testimonial,i)=>(
                   <SwiperSlide>
                      <div className={css.testimonial}>
                        <img src={testimonial.image} alt=''></img>
                        <span>{testimonial.comment}</span>
                        <hr></hr>
                        <span>{testimonial.name}</span>
                      </div>
                   </SwiperSlide>
                ))
             }
            </Swiper>
        </div>
    </div>
  )
}
