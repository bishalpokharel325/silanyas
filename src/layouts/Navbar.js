import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (

    <div className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="navleft collapse navbar-collapse" id="navbarSupportedContent">
        <Link className="nav-item" to="/buy">Buy</Link>
        <Link className="nav-item" to="/homes/rent">Rent</Link>
        <Link className="nav-item" to="/homes/buy">Sell</Link>
        <Link className="nav-item" to="/homes/buy">Home Loans</Link>
        <Link className="nav-item" to="/homes/buy">Agent Finder</Link>
  </div>
  
  <div className="navmiddle">
      <Link className="navbar-brand" to="/"><img src="./images/logo.png"/></Link>
  </div>
  <div className="navright collapse navbar-collapse" id="navbarSupportedContent">
        <Link to="/homes/buy">Manage Rents</Link>
        <Link to="/homes/rent">Advertise</Link>
        <Link to="/homes/buy">Help</Link>
        <Link to="/homes/buy">Sign In</Link>

  </div>
</div>
    )
}

export default Navbar
