import axios from 'axios'
import { data } from 'jquery'
import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Googlemap from '../components/Googlemap'
import Listing from '../components/Listing'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import './Buy.css'

function Buy() {
    
        const [listings, setListings] = useState([])
        useEffect(()=>{
            axios
            .get("http://127.0.0.1:8000/api/listings/")
            .then(res=>
                setListings(res.data))
            .catch(err=>console.log(err))
        },[])
        
        
    return (
        <div className="buy">
            <Navbar/>
            <Filter/>
            <div className="buy__body">
                <div className="buy__left">
                    <Googlemap/>
                </div>
                <div className="buy__right">
                    <div className="buy__right__top">
                        <h5>Real Estate & Homes For Sale</h5>
                        <div className="right__top__left">
                            <span>Sort by:</span>
                             <select>
                                 <option>All Listing</option>
                                 <option>Price (High to Low)</option>
                                 <option>Price (Low to High)</option>
                                 <option>Newest</option>
                                 <option>Bedrooms</option>
                                 <option>Bathrooms</option>
                                 <option>Square Feet</option>
                                 <option>Lot Size</option>
                             </select>
                        </div>
                       
                    </div>
                    <div className="right__listings">
                        {listings.map((item)=>{    
                            return <Listing key={item.id} days={item.list_date} src={item.photomain} price={item.price} bds={item.bedrooms} ba={item.bathrooms} address={item.address}/>
                        }      
                        )}
                    </div>
                    
                    <Footer/>
                </div>

            </div>
                
            
        </div>
    )
}

export default Buy
