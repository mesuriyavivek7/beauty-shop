import React, { useState } from 'react'
import css from './header.module.css'

//import images
import Logo from '../../assets/logo.png'

//import icons
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  
  const isShow=window.innerWidth
  const ShowBars=(isShow<=640?true:false)

  const [ShowMenu,SetShowMenu]=useState(ShowBars?false:true)



  const toggleMenu=()=>{
    SetShowMenu((ShowMenu)=>!ShowMenu)
  }

  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt=''></img>
            <span>Rosen</span>
        </div>

        <div className={css.right}>

           {/* for responsive design */}
           <div className={css.bars} onClick={toggleMenu} style={{display:ShowBars?'inherit':'none'}}>
             <MenuIcon></MenuIcon>
           </div>
            
              <ul className={css.menu} style={{display: ShowMenu ? 'inherit' :'none'}}>
                <li>Collection</li>
                <li>New</li>
                <li>Brands</li>
                <li>Sales</li>
                <li>ENG</li>
              </ul>
            
            <input type='search' placeholder='search..' className={css.search}></input>
            <ShoppingBagIcon className={css.cart}></ShoppingBagIcon>
        </div>
    </div>
  )
}
