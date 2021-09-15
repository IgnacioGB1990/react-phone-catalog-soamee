import React, { useState, useEffect } from 'react'
import axios from "axios"
import Loader from "../components/Loader"
import "../styles/PhoneScreen.css"

const PhoneScreen = ({ match }) => {

  const [phone, setPhone] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhone = async () => {
      const { data } = await axios.get(`/api/phones/${match.params.id}`)
      setPhone(data)
      setLoading(false)
    }
    fetchPhone()
  }, [match])

  return (
    <>
      { loading && <Loader />}
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

    </>
  )
}

export default PhoneScreen
