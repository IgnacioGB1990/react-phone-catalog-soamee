import mongoose from "mongoose"

const phoneSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageFileName: {
    type: String,
    required: true
  },
  screen: {
    type: String,
    required: true
  },
  processor: {
    type: String,
    required: true
  },
  ram: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
})

const Phone = mongoose.model("Phone", phoneSchema)

export default Phone