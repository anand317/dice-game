import React from 'react'
import '../App.css';
import './../App.css'

const HeroSection = () => {
  return (
    <main className="hero">
        <div className='hero-containt'>
            <h1>YOUR FEET DESERVE THE BEST </h1>
            <p> Move, Shop, Customise & Celebrate With Us.
                No matter what you feel like doing today, 
                It's better as a Member.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div> 
            <div>
              <p>Also available on</p>
              <div className='hero-btn'>
                <img src={process.env.PUBLIC_URL + '/images/flipkart.png'} alt='logo'></img>
                <img src={process.env.PUBLIC_URL + '/images/amazon.png'} alt='logo'></img>
              </div>
            </div>
        </div>
        <div className='hero-image'>
          <img src={process.env.PUBLIC_URL + '/images/shoe_image.png'} alt='shoe_logo'></img>
        </div>
    </main>
  )
}

export default HeroSection;