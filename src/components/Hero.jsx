import React from 'react'

const Hero = () => {
  return (
    <div className=" hero " >
        
        <div className="hero-containt">
            <h1> your feet deserved the best</h1>
            <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>shop Now</button>
                <button
                 className='secondary-btn'>category</button>
            </div>
            <div className="shoping">
                <p>Also Available on</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
            
            <div className="hero-image"></div>
        
        </div>
        <img src="/images/shoe_image.png" alt="hero-logo" />


    </div>
  )
}

export default Hero