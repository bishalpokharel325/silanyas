import React from 'react'
import carddata from '../carddata'
import Cards from '../components/Cards'
import LandingImage from '../components/LandingImage'
import Socialmedia from '../components/Socialmedia'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import './Main.css'

function Main() {
    return (
        <div className="main">
            <Navbar/>
            <LandingImage/>
            <div className="main__middle">
                <div className="main__middle__top">
                    <h1>Whether you’re buying, selling or renting, <br/>we can help you move forward.</h1>
                </div>
                <div className="main__middle__bottom">
                    {carddata.map((item)=>{
                return <Cards key={item.id} src={item.src} title={item.title} description={item.description} btn={item.btn} hrefs={item.hrefs}/>
            })}
                </div>

            </div>
            
            <Footer Social={Socialmedia}/>
        </div>
    )
}

export default Main
