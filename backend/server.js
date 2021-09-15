const express = require("express")
const phones = require("./data/phones")

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

app.listen(7000, console.log("Server running on port 7000"))