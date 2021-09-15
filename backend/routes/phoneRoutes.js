import express from "express"
import asyncHandler from "express-async-handler"
const router = express.Router()
import Phone from "../models/phoneModel.js"

// @desc   Fetch all phones
// @route  GET /api/phones
// @access Public


router.get("/", asyncHandler(async (req, res) => {
  const phones = await Phone.find({})

  res.json(phones)
}))


// @desc   Fetch single phone
// @route  GET /api/phones/:id
// @access Public
router.get("/:id", asyncHandler(async (req, res) => {

  const phone = await Phone.findById(req.params.id)

  if (phone) {
    res.json(phone)
  } else {
    res.status(404).json({ message: "Phone not found" })
  }
}))



export default router