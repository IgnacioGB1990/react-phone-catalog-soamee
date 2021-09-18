import React, { useState, useEffect } from 'react'
import Phone from "../components/Phone"
import axios from "axios"
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap"
import Loader from "../components/Loader"
import "../styles/HomeScreen.css"

const HomeScreen = () => {

  const [phones, setPhones] = useState([])
  const [phonesToModify, setPhonesToModify] = useState([])
  const [uniqueColors, setUniqueColors] = useState([])
  const [uniqueManufacturer, setUniqueManufacturer] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhones = async () => {
      const { data } = await axios.get("/api/phones")
      setPhones(data)
      setUniqueColorFunction(data)
      setUniqueManufacturerFunction(data)
      setPhonesToModify(data)
      setLoading(false)
    }

    fetchPhones()
  }, [])


  const setUniqueColorFunction = (phones) => {
    phones.map((phone) => (
      uniqueColors.push(phone.color)
    ))
    let uniquePhoneColor = [...new Set(uniqueColors)]
    setUniqueColors(uniquePhoneColor)
  }

  const setUniqueManufacturerFunction = (phones) => {
    phones.map((phone) => (
      uniqueManufacturer.push(phone.manufacturer)
    ))
    let uniquePhoneManufacturer = [...new Set(uniqueManufacturer)]
    setUniqueManufacturer(uniquePhoneManufacturer)
  }

  const deletePhone = (phone) => {
    const newArrayOfPhones = phones.filter(p => p._id !== phone._id);
    setPhones(newArrayOfPhones)
    setPhonesToModify(newArrayOfPhones)
    setUniqueColorFunction(newArrayOfPhones)
    setUniqueManufacturerFunction(newArrayOfPhones)
    axios.delete(`/api/phones/${phone._id}`)
  }

  const all = () => {
    setPhonesToModify(phones)
  }


  const filterByManufacturer = (manufacturer) => {
    const filteredPhones = phones.filter(p => p.manufacturer === manufacturer);
    setPhonesToModify(filteredPhones)
  }


  const filterByColor = (color) => {
    const filteredPhones = phones.filter(p => p.color === color);
    setPhonesToModify(filteredPhones)
  }

  console.log(phones)

  return (
    <>
      {loading ? <Loader /> : phones.length === 0 ? <div className="noPhonesHeader">No phones on catalog<i className="fas fa-sad-tear"></i></div>
        :
        <>
          <div className="homeSectionContainer">
            <div className="headerPhoneCatalog">Phone Catalog</div>

            <div className="filterContainer">
              {['Manufacturer'].map(
                (variant) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    title={variant}
                  >
                    {uniqueManufacturer.map((manufacturer, index) => (
                      <Dropdown.Item key={index} onClick={() => filterByManufacturer(manufacturer)} eventKey="1">{manufacturer}</Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    <Dropdown.Item className="allFilter" onClick={() => all()} >All</Dropdown.Item>
                  </DropdownButton>
                ),
              )}

              {['Color'].map(
                (variant) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    title={variant}
                  >
                    {uniqueColors.map((color, index) => (
                      <Dropdown.Item key={index} onClick={() => filterByColor(color)} eventKey="2">{color}</Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    <Dropdown.Item className="allFilter" onClick={() => all()} >All</Dropdown.Item>
                  </DropdownButton>
                ),
              )}
            </div>





            {phonesToModify.map((phone, index) => (
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