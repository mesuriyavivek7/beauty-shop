import React from 'react'

import css from './hero.module.css'

//import images
import HeroImage from '../../assets/hero.png'

//import icons
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Hero() {
  return (
    <div className={css.container}>

    
        <div className={css.h_sides}>
            <span className={css.text1}>Screen protection cream</span>
     
            <div className={css.text2}>
                <span>Treandy Collection</span>
                <span>
                {" "}
                here your are getting very best products with best quality and all products are in natural from</span>
            </div>
        </div>

        <div className={css.wrapper}>
           <div className={css.blue}></div>
           <img src={HeroImage} width={600} alt=''></img>

           <div className={css.cart2}>
             <LocalMallIcon></LocalMallIcon>
             <div className={css.signup}>
                <span>Best Signup Offers</span>
                <div> 
                    <ArrowRightAltIcon></ArrowRightAltIcon>
                </div>
             </div>
           </div>

        </div>

        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100K</span>
                <span>Happy customers</span>
            </div>
        </div>


    </div>
  )
}
