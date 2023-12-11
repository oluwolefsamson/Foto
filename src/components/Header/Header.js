import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className='h-container'>
        <div className='logo'>
            <img src='logo.png' alt='logo' />
        </div>

        <div className='white-gradient' /> 

        <div className='nav'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </div>
    
    </section>
  )
}

export default Header