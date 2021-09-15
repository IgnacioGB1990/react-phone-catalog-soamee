import React from 'react'
import "../styles/PhoneScreen.css"
import phones from "../data/phones"

const PhoneScreen = ({ match }) => {

  const phone = phones.find((p) => p._id === match.params.id)

  return (
    <div className="phoneScreenContainer">

      <img src={phone.imageFileName} alt={phone.name} />



      <div >Name:</div>
      <p>{phone.name}</p>
      <div>Manufacturer:</div>
      <p>{phone.manufacturer}</p>
      <div>Description:</div>
      <p>{phone.description}</p>
      <div>Color:</div>
      <p>{phone.color}</p>
      <div>Price:</div>
      <p>{phone.price}</p>
      <div>Screen:</div>
      <p>{phone.screen}</p>
      <div>Processor:</div>
      <p>{phone.processor}</p>
      <div>Ram:</div>
      <p>{phone.ram}</p>
    </div>


  )
}

export default PhoneScreen
