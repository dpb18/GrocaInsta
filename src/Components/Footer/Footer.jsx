import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer.png'
import instagram_logo from '../Assets/instagram.png'
import facebook_logo from '../Assets/facebook.png'
import pinterest_logo from '../Assets/pinterest.png'
import twitter_logo from '../Assets/twitter.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt='' />
                <p>GrocaInsta</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_logo} alt='' />
                </div>
                <div className="footer-icons-container">
                    <img src={facebook_logo} alt=''/>
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_logo} alt=''/>
                </div>
                <div className="footer-icons-container">
                    <img src={twitter_logo} alt=''/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer