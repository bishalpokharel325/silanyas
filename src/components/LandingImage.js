import React from 'react'
import './LandingImage.css'

function LandingImage() {
    return (
        <div className="landingimage">
            <img src="./images/home.jpeg"/>
            <div className="landingcenter">
            <h1>When you're ready for a change, we're ready to help.</h1>
            <div className="landinginput">
            <input placeholder="Enter address you want your dream home"/>
            </div>
            
            </div>
            
        </div>
    )
}

export default LandingImage
