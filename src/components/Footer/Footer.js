import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-container'>

        <div className='column1'>
            <span>Contact Us</span>
            <span>Send us a message</span>
            <input type='text' className='first-input' placeholder='Full name'/>
            <input type='gmail'  className='second-input' placeholder='Your email'/>
            <input type='text' className='third-input' placeholder='Your message'/>
            <span>Submit</span>
        </div>

        <div className='column2'>
            <span>Sitemap</span>
            <span>All our pages</span>
            <li><a href='#'>- Home</a></li>
            <li><a href='#'>- About Us</a></li>
            <li><a href='#'>- Services</a></li>
            <li><a href='#'>- Blog</a></li>
            <li><a href='#'>- Contact Us</a></li>
        </div>

        <div className='column3'>
            <img src='logo.png' />
            <span> (+234) 902014957</span>
            <span>oluwolefsamson44@gmail.com</span>
        </div>
        <div className='white-gradient4' /> 
    </section>
  )
}

export default Footer