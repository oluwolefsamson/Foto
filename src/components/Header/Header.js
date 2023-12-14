import React from 'react'
import "./Header.css"
import {GiCookingPot} from 'react-icons/gi'
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
        <div className='both-side'>
             {/* left-side */}
             <div className='left-side'>
               <img src='logo.png' />
             </div>

             {/* right-side */}
             <OutsideClickHandler
                onOutsideClick={()=> {
                  setMenuOpened(false)
                }}
                >
             <div className='right-side'  
             style={getMenuStyles(menuOpened)}>
                <a href='#'>Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Services</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact Us</a>
             </div>
             </OutsideClickHandler>
             <div className="menu-icon" onClick={ () => setMenuOpened ((prev)=>!prev)}>
              <BiMenuAltRight size={35} color='black'/>
              </div>

             

        </div>


    </section>
  )
}

export default Header