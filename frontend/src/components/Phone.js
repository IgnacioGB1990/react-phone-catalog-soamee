import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Phone.css"

const Phone = ({ phone }) => {
  return (
    <Link className="removeLink" to={`/phones/${phone._id}`} >
      <div className="phoneComponentContainer">
        <div className="phoneName">{phone.name}</div>
        <p>{phone.manufacturer}</p>
      </div>
    </Link >
  )
}

export default Phone
