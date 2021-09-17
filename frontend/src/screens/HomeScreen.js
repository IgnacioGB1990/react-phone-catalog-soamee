import React, { useState, useEffect } from 'react'
import Phone from "../components/Phone"
import axios from "axios"
import Loader from "../components/Loader"
import "../styles/HomeScreen.css"

const HomeScreen = () => {

  const [phones, setPhones] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhones = async () => {
      const { data } = await axios.get("/api/phones")
      setPhones(data)
      setLoading(false)
    }

    fetchPhones()
  }, [])

  const deletePhone = (phone) => {

    const newArrayOfPhones = phones.filter(p => p._id !== phone._id);
    setPhones(newArrayOfPhones)
    axios.delete(`/api/phones/${phone._id}`)
  }



  return (
    <>
      {loading ? <Loader /> : phones.length === 0 ? <div className="noPhonesHeader">No phones on catalog<i class="fas fa-sad-tear"></i></div>
        :
        <>
          <div className="homeSectionContainer">
            <div className="headerPhoneCatalog">Phone Catalog</div>
            {phones.map((phone, index) => (
              <li className="phoneList" key={index}>

                <img className="imageSizeHome" src={phone.imageFileName} alt={phone.name} />


                <Phone phone={phone} />

                <i onClick={() => deletePhone(phone)} className="fas fa-trash" />

              </li>
            ))}
          </div>
        </>
      }
    </>
  )
}

export default HomeScreen;