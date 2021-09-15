import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import phoneRoutes from "./routes/phoneRoutes.js"

dotenv.config()

connectDB()

const app = express()

app.get("/", (req, res) => {
  res.send("API is running...")
})

app.use("/api/phones", phoneRoutes)



const PORT = process.env.PORT || 7000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))