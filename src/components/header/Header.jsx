import React from 'react'
import css from './header.module.css'

//import images
import Logo from '../../assets/logo.png'

//import icons
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Header() {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt=''></img>
            <span>Rosen</span>
        </div>
        <div className={css.right}>
            
              <ul className={css.menu}>
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
