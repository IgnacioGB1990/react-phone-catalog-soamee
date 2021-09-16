import React, { useState } from 'react'
import axios from "axios"
import "../styles/CreateScreen.css"

const CreateScreen = () => {

  const [name, setName] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [description, setDescription] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")
  const [imageFileName, setImageFileName] = useState("")
  const [screen, setScreen] = useState("")
  const [processor, setProcessor] = useState("")
  const [ram, setRam] = useState("")

  const data = {
    name: name,
    manufacturer: manufacturer,
    description: description,
    color: color,
    price: price,
    imageFileName: "/images/iphone.png",
    screen: screen,
    processor: processor,
    ram: ram
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("/api/phones", data)

    setName(e.target.reset())
    setManufacturer(e.target.reset())
    setDescription(e.target.reset())
    setColor(e.target.reset())
    setPrice(e.target.reset())
    setScreen(e.target.reset())
    setProcessor(e.target.reset())
    setRam(e.target.reset())
  }

  return (
    <div className="createPhoneContainer">
      <form className="formCreatePhone" onSubmit={submitHandler}>
        <div className="createHeader">Create Phone</div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} />
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Image" value={imageFileName} onChange={(e) => setImageFileName(e.target.value)} />
        <input type="text" placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
        <input type="text" placeholder="Processor" value={processor} onChange={(e) => setProcessor(e.target.value)} />
        <input type="text" placeholder="Ram" value={ram} onChange={(e) => setRam(e.target.value)} />
        <button type="submit" ><div className="buttonText">Create Phone</div></button>
      </form>
    </div>
  )
}

export default CreateScreen