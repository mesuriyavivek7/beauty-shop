import React from 'react'

import ReactCompareImage from 'react-compare-image'

import css from './virtual.module.css'
//import images
import Shades from  '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

export default function Virtual() {
  return (
    <div className={css.virtual}>
        <div className={css.left}> 
           <span>Virtual Try On</span>
           <span>Never Buy the wrong shade again!</span>
           <span>Try Now!</span>
           <img src={Shades} alt=''></img>
        </div>
        <div className={css.right}>
          <div className={css.wrapper}>
             <ReactCompareImage leftImage={Before} rightImage={After}></ReactCompareImage>
          </div>
        </div>
    </div>
  )
}
