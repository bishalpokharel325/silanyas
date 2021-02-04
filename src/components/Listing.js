import React from 'react'
import './Listing.css'

function Listing({src,days,price,bds,ba,sqft,address}) {
    return (
        <div className="listing">
            <div className="listing__image" style={{ backgroundImage: `url(${src})` }}>
                <div className="image__top">
                    <span>{days} days on Silanyas</span>
                    <i className="fa fa-heart-o fa-2x"></i>
                </div>              
            </div>
            <div className="listing__price">
                <h5>Rs.{price} Lakh</h5>
                </div>
                
                <div className="listing__details">
                <h6>{bds}bds,{ba}ba,{sqft} sq.ft.</h6>
                <h6 className="address">{address}</h6>
                </div>
        </div>
    )
}

export default Listing
