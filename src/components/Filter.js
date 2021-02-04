import React from 'react'
import './Filter.css'

function Filter() {
    return (
        <div className="filter">
            <div className="filter__input"> 
                <input placeholder="Search any place"/>
                <i className="fa fa-search"></i>
            </div>
            <button className="button__forsale button__current">For Sale</button>
            <button className="button__price">Price</button>
            <button className="button__rooms">Beds & Baths</button>
            <button className="button__lotsize">Lot Size</button>
            <button className="button__more">More</button>
            {/* for sale options */}
            <div className="forsale__dropdown">
            <form>
                <div className="forsale__dropdown__list">
                    <div>
                    <input type="radio" name="forsale"/>
                <span>For Sale</span>
                </div>
                <div>
                 <input type="radio" name="forsale"/>
                <span>For Rent</span>
                </div>   

                </div>
                
            </form>
            </div>
        </div>
    )
}

export default Filter
