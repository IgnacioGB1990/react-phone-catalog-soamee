import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import "../styles/PhoneScreen.css"

const PhoneScreen = ({ match }) => {

  const [phone, setPhone] = useState([])
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState("")

  useEffect(() => {
    const fetchPhone = async () => {
      const { data } = await axios.get(`/api/phones/${match.params.id}`)
      setPhone(data)
      setImage(phone.imageFileName)
      setLoading(false)
    }
    fetchPhone()
  }, [match, phone.imageFileName])


  return (
    <>
      { loading ? <Loader /> :
        <>
          <div className="phoneScreenContainer">
            <div className="leftContainerPhoneScreen">
              <img className="imageSizePhoneScreen" src={phone.imageFileName} alt={phone.name} />
            </div>

            <div className="rightContainerPhoneScreen">

              <div >Name:</div>
              <p>{phone.name}</p>
              <div>Manufacturer:</div>
              <p>{phone.manufacturer}</p>
              <div>Description:</div>
              <p>{phone.description}</p>
              <div>Color:</div>
              <p>{phone.color}</p>
              <div>Screen:</div>
              <p>{phone.screen}</p>
              <div>Processor:</div>
              <p>{phone.processor}</p>
              <div>Ram:</div>
              <p>{phone.ram}</p>
              <div>Price:</div>
              <p>{phone.price}€</p>
            </div>


          </div>
          <Link className="removeLink" to={`/phones/update/${phone._id}`} >
            <div className="updateHeaderPhoneScreen">
              Update Phone
            </div>

          </Link>
        </>
      }
    </>
  )
}

export default PhoneScreen


