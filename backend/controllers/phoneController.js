import asyncHandler from "express-async-handler"
import Phone from "../models/phoneModel.js"

// @desc   Fetch all phones
// @route  GET /api/phones
// @access Public
const getPhones = asyncHandler(async (req, res) => {
  const phones = await Phone.find({})

  res.json(phones)
})


// @desc   Fetch single phone
// @route  GET /api/phones/:id
// @access Public
const getPhoneById = asyncHandler(async (req, res) => {

  const phone = await Phone.findById(req.params.id)

  if (phone) {
    res.json(phone)
  } else {
    res.status(404).json({ message: "Phone not found" })

  }
})


// @desc   Creates single phone
// @route  POST /api/phones
// @access Public
const createPhone = asyncHandler(async (req, res) => {

  const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body
  const phoneExists = await Phone.findOne({ name })

  if (phoneExists) {
    res.status(400)
    throw new Error("Phone already exists")
  }

  const phone = await Phone.create({
    name, manufacturer, description, color, price, imageFileName, screen, processor, ram
  })

  if (phone) {
    res.status(201).json({
      _id: phone._id,
      name: phone.name,
      manufacturer: phone.manufacturer,
      description: phone.description,
      color: phone.color,
      price: phone.price,
      imageFileName: phone.imageFileName,
      screen: phone.screen,
      processor: phone.processor,
      ram: phone.ram
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc Delete a phone
// @route DELETE /api/products/:id
// @access Public
const deletePhone = asyncHandler(async (req, res) => {
  const phone = await Phone.findById(req.params.id)
  if (phone) {
    await phone.remove()
    res.json({ message: "Phone removed" })
  } else {
    res.status(404)
    throw new Error("Phone not found")
  }
})


// @desc Update a phone
// @route PUT /api/products/:id
// @access Public
const updatePhone = asyncHandler(async (req, res) => {

  const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body

  const phone = await Phone.findById(req.params.id)

  if (phone) {
    phone.name = name,
      phone.manufacturer = manufacturer,
      phone.description = description,
      phone.color = color,
      phone.price = price,
      phone.imageFileName = imageFileName,
      phone.screen = screen,
      phone.processor = processor,
      phone.ram = ram

    const updatedPhone = await phone.save()
    res.json(updatedPhone)

  } else {
    res.status(404)
    throw new Error("Phone not found")
  }

})

export { getPhones, getPhoneById, createPhone, deletePhone, updatePhone }
