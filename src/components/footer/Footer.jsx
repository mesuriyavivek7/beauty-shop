import React from 'react'


import css from './footer.module.css'

//importing images
import LOGO from  '../../assets/logo.png'

//import icons
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LinkIcon from '@mui/icons-material/Link';

export default function Footer() {
  return (
    <div className={css.FooterWrapper}>
        <hr>
        </hr>
        <div className={css.cFooter}>
            <div className={css.logo}>
               <img src={LOGO}></img>
               <span>Rosen</span>
            </div>

        
          <div className={css.block}>
             <div className={css.details}>
                <span>Contact Us</span>
                <span className={css.muiicon}> 
                  <PlaceIcon className={css.icons}></PlaceIcon>
                  <p>New York Yart, Near Binory Hotel, FL 39890</p>
                </span>
                <span className={css.muiicon}>
                    <PhoneIcon className={css.icons}></PhoneIcon>
                    <a href='tel:356-675-4451'>356-675-4451</a>
                </span>
                <span className={css.muiicon}>
                     <MailIcon className={css.icons}></MailIcon>
                     <a href='mailto:supportrosen@gmail.com'>supportrosen@gmail.com</a>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.details}>
                <span>Account</span>
                <span className={css.muiicon}>
                    <LoginIcon className={css.icons}></LoginIcon>
                    <p>Sign In</p>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.details}>
                <span>Company</span>
                <span className={css.muiicon}>
                    <PersonIcon className={css.icons}></PersonIcon>
                    <a href='/about'><p>About Us</p></a>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.details}>
                <span>Resources</span>
                <span className={css.muiicon}>
                    <LinkIcon className={css.icons}></LinkIcon>
                    <p>Safety Privacy & Terms</p>
                </span>
            </div>
        </div>

     
       </div>
       <div className={css.copyright}>
            <span>copyright @ 2023 by rosen, Inc.</span>
            <span>All rights reserved</span>
        </div>
    </div>
  )
}
