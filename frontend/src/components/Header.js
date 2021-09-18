import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Header.css"


const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerCenter">
        <Link className="homeLogoContainer" to="/">
          <i className="fas fa-home"></i>
        </Link>
        <Link className="createLogoContainer" to="/create">
          <i className="fas fa-folder-plus"></i>
        </Link>
      </div>
    </div>
  )
}

export default Header
