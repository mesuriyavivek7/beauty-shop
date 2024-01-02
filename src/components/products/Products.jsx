import React, { useState } from 'react'

//importing auto animate 
import {useAutoAnimate} from '@formkit/auto-animate/react'

import css from './products.module.css'
import {ProductsData} from '../../data/products'
//import images
import Plan from  '../../assets/plane.png'

export default function Products() {

  const [parent]=useAutoAnimate()
  
  const [MneuData,setMenuData]=useState(ProductsData) 

  const filter=(type)=>{
    setMenuData(ProductsData.filter((product)=>product.type===type))
  }

  return (
    <div className={css.container}>
          <img src={Plan} alt=''></img>
          <h1>Our featured products</h1>

          <div className={css.products}>

            <ul className={css.menu}>
                <li onClick={()=>setMenuData(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditionars</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>

            <div className={css.list} ref={parent}>
             {
              MneuData.map((products,i)=>(
                <div className={css.product}>
                   <div className='left-s'>
                     <div className='name'>
                       <span>{products.name}</span>
                       <span>{products.detail}</span>
                     </div>
                     <span>${products .price}</span>
                    <div>Shop Now</div>
                  </div>

                  <img src={products.img} alt='product' className='img-p'></img>
               </div>
              
              ))
             }
          </div>

          </div>
          
    </div>
  )
}
