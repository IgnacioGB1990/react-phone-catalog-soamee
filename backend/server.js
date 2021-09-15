import express from "express"
import dotenv from "dotenv"
import phones from "./data/phones.js"

dotenv.config()

const app = express()

app.get("/", (req, res) => {
  res.send("API is running...")
})

app.get("/api/phones", (req, res) => {
  res.json(phones)
})

app.get("/api/phones/:id", (req, res) => {

  const phone = phones.find((p) => p._id === req.params.id)
  res.json(phone)
})


const PORT = process.env.PORT || 7000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))