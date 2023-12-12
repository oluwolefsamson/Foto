import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from 'react';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles =(menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && '-100%'}
    }
  }

  return (
    <section className='h-container'>
        <div className='logo'>
            <img src='logo.png' alt='logo' />
        </div>

        <div className='white-gradient' /> 

        <OutsideClickHandler
                onOutsideClick={()=> {
                  setMenuOpened(false)
                }}
                >

        <div className='nav' style={getMenuStyles(menuOpened)}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Contact Us</a></li>
  
        </div>
        </OutsideClickHandler>
            
             <div className="menu-icon" onClick={ () => setMenuOpened ((prev)=>!prev)}>
              <BiMenuAltRight size={35} />
          </div>

       
    
    </section>
  )
}

export default Header