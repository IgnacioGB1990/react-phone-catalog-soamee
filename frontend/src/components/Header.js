import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Header.css"


const Header = () => {
  return (
    <div className="headerContainer">
      <Link className="homeLogoContainer" to="/">
        <i className="fas fa-home"></i>
      </Link>
      <Link className="createLogoContainer" to="/create">
        <i className="fas fa-folder-plus"></i>
      </Link>
    </div>
  )
}

export default Header
