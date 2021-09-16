import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import phoneRoutes from "./routes/phoneRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running...")
})

app.use("/api/phones", phoneRoutes)

app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 7000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))