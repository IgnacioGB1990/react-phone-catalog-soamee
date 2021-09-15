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

  console.log(phones)
  return (<div>


    { loading && <Loader />}
    {!loading && <div className="homeSectionContainer">
      {phones.map((phone, index) => (
        <li className="phoneList" key={index}>
          <Phone phone={phone} />

        </li>
      ))}
    </div>}
  </div>
  )
}

export default HomeScreen;