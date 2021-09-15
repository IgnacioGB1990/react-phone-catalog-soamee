import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Phone.css"

const Phone = ({ phone }) => {
  return (
    <div>
      <Link className="removeLink" to={`/phone/${phone._id}`} >
        {phone.name}
      </Link>
    </div>
  )
}

export default Phone
