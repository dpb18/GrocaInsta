import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/right-arrow.png'
import hero_image from '../Assets/vegetable.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>FROM FARM TO DOOR</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>GROCERIES</p>
                    </div>
                    <p>Shop Fresh</p>
                    <p>Shop Smart</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Get Fresh Foods</div>
                    <img src={arrow_icon} alt=''/>
                </div>
            
            </div>
            <div className="hero-right">
                <img src={hero_image} alt=''/>
            </div>
        </div>
    )
}

export default Hero