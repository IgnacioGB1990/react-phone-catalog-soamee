import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Form } from "react-bootstrap"
import Loader from "../components/Loader"
import "../styles/UpdateScreen.css"

const UpdateScreen = ({ match }) => {

  const [name, setName] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [description, setDescription] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")
  const [imageFileName, setImageFileName] = useState("")
  const [screen, setScreen] = useState("")
  const [processor, setProcessor] = useState("")
  const [ram, setRam] = useState("")

  const [phoneToUpdate, setPhoneToUpdate] = useState("")
  const [loading, setLoading] = useState("")
  const [phoneUpdated, setPhoneUpdated] = useState(false)
  const [uploading, setUploading] = useState(false)

  const data = {
    name: name,
    manufacturer: manufacturer,
    description: description,
    color: color,
    price: price,
    imageFileName: imageFileName,
    screen: screen,
    processor: processor,
    ram: ram
  }

  useEffect(() => {
    fetchPhone()
  })

  const fetchPhone = async () => {
    const { data } = await axios.get(`/api/phones/${match.params.id}`)
    setPhoneToUpdate(data)
    setLoading(false)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`/api/phones/${match.params.id}`, data)
    fetchPhone()

    setName(e.target.reset())
    setManufacturer(e.target.reset())
    setDescription(e.target.reset())
    setColor(e.target.reset())
    setPrice(e.target.reset())
    setScreen(e.target.reset())
    setProcessor(e.target.reset())
    setRam(e.target.reset())

    setPhoneUpdated(true)
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("image", file)
    setUploading(true)

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
      const { data } = await axios.post("/api/upload", formData, config)

      setImageFileName(data)
      setUploading(false)
    } catch (error) {
      console.log(error)
      setUploading(false)
    }
  }


  return (
    <>
      {loading ? <Loader /> :
        <>
          <div className="createPhoneContainer">
            <form className="formCreatePhone" onSubmit={submitHandler}>
              {phoneUpdated ? <div className="createdMessageHeader">Phone Updated !!!</div> : <div className="updateHeader">Update Phone</div>}
              <div className="phoneToUpdateName">{phoneToUpdate.name}</div>
              <div className="phoneToUpdateManufacturer">{phoneToUpdate.manufacturer}</div>
              <input required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input required type="text" placeholder="Manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
              <input required type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <input required type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} />
              <input required type="text" placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
              <input required type="text" placeholder="Processor" value={processor} onChange={(e) => setProcessor(e.target.value)} />
              <input required type="text" placeholder="Ram" value={ram} onChange={(e) => setRam(e.target.value)} />
              <input required type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
              <Form.Group controlId="image">
                <Form.File required id="image-file" label="Upload file ( jpg, jpeg or png )" custom onChange={uploadFileHandler}></Form.File>
                {uploading && <Loader />}
              </Form.Group>
              <button type="submit" ><div className="buttonText">Update Phone</div></button>
            </form>
          </div>
        </>
      }
    </>
  )
}

export default UpdateScreen
