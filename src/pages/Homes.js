import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Listing from '../components/Listing'
import { data } from 'jquery'

function Homes() {
 
    const [user, setUser] = useState([])
    useEffect(()=>{
        axios
        .get('http://127.0.0.1:8000/api/accounts/2')
        .then(res=>{
            setUser(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    

    
    
    return (
        <div>
            <Navbar/>
           {user.map((item)=>{
               
                   return(
                  <div>
                      <h1>{item.username}</h1>
                      <p>{item.password}</p>
                    </div>
               )
               
               
           })}
           
            <Footer/>
        </div>
    )
}

export default Homes
