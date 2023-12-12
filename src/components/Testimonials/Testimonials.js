import React from 'react'
import './Testimonials.css'
import data from '../../Utils/testimonial.json'

const Testimonials = () => {
  return (
    <section className='t-container'>
        <div className='t-text'>
            <span>TESTIMONIALS</span>
            <span>Read what people think about services and graphics</span>
            
        </div>

        <div className='t-card'>
        <div className='white-gradient3' /> 
                {
                    data.map((feed, f) => (
                        <div key={f} className='card-data'>
                            <img src={feed.image} alt='feedImg' />
                            <span>{feed.name}</span>
                            <span>{feed.detail}</span>
                           
                             
                        </div>

                        
                    ))
                }

{
                    data.map((feed, f) => (
                        <div key={f} className='card-data'>
                            <img src={feed.image} alt='feedImg' />
                            <span>{feed.name}</span>
                            <span>{feed.detail}</span>
                           
                             
                        </div>

                        
                    ))
                }


{
                    data.map((feed, f) => (
                        <div key={f} className='card-data'>
                            <img src={feed.image} alt='feedImg' />
                            <span>{feed.name}</span>
                            <span>{feed.detail}</span>
                           
                             
                        </div>

                        
                    ))
                }
        </div>
    </section>
  )
}

export default Testimonials