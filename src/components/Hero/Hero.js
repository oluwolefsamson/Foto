import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>

        {/* frist */}
        <div className='hero-text'>
            <span>Graphics And Illustration World</span>
            <span>The best platform where you can get outstanding Graphics and Illustration</span>
            <span>Buy Now</span>
        </div>

        <div className='white-gradient2' /> 

        {/* second */}
        <img src='foto1.png' alt='hero-img'/>

    </section>
  )
}

export default Hero