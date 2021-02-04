import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards({src,title,description,btn,hrefs}) {
    return (
        <div className="cards">
            <div className="cards__image">
                <img src={src}/>
            </div>
            <div className="cards__bottom">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={hrefs} className="btn btn-primary">{btn}</Link>
            </div>
            
        </div>
    )
}

export default Cards
