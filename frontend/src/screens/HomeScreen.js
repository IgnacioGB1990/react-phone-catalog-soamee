import React from 'react'
import Phone from "../components/Phone"
import Loader from "../components/Loader"
import "../styles/HomeScreen.css"
import phones from "../data/phones"

const HomeScreen = () => {

  console.log(phones)
  return (
    <div className="homeSectionContainer">
      {phones.map((phone, index) => (
        <li className="phoneList" key={index}>
          <Phone phone={phone} />

        </li>
      ))}
    </div>
  )
}

export default HomeScreen;