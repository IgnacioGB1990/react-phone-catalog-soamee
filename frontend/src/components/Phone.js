import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Phone.css"

const Phone = ({ phone }) => {
  return (
    <div className="phoneComponentContainer">
      <Link className="removeLink" to={`/phones/${phone._id}`} >
        {phone.name}
      </Link>
      {phone.manufacturer}
    </div>
  )
}

export default Phone
