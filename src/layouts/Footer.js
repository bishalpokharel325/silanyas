import React from 'react'
import { Link } from 'react-router-dom'
import Socialmedia from '../components/Socialmedia'
import './Footer.css'

function Footer({Social}) {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__top__lists">
                    <Link to="/homes/buy">About Us</Link>
                </div>
                <div className="footer__top__lists">
                    <Link to="/homes/buy">Help</Link>
                </div>
                <div className="footer__top__lists">
                    <Link to="/homes/buy">Contact Us</Link>
                </div>
                <div className="footer__top__lists">
                    <Link to="/homes/buy">Career</Link>
                </div>
                <div className="footer__top__lists">
                    <Link to="/homes/buy">Terms of Conditions</Link>
                </div>
                
                
            </div>
            <div className="footer__middle">
                <div className="footer__middle__apps">
                    <a><img src="./images/google.png"/></a>
                    <a><img src="./images/google.png"/></a>
                </div>
                <div className="footer__middle__social">
                    {Social && <Social/>}
                </div>

            </div>
            <div className="footer__bottom">
                <h5>&copy; SILANYAS 2021</h5>
            </div>
        
            <img src="./images/footerimage.png"/>
        </div>
    )
}

export default Footer
