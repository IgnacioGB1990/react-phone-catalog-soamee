import path from "path"
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import phoneRoutes from "./routes/phoneRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use("/api/phones", phoneRoutes)
app.use("/api/upload", uploadRoutes)

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")))

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")))
} else {
  app.get("/", (req, res) => {
    res.send("API is running...")
  })
}



app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 7000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))