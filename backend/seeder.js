import mongoose from "mongoose"
import dotenv from "dotenv"
import phones from "./data/phones.js"
import Phone from "./models/phoneModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Phone.deleteMany()

    const samplePhones = phones.map(phone => {
      return { ...phone }
    })

    await Phone.insertMany(samplePhones)

    console.log("Data Imported!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}


const destroyData = async () => {
  try {
    await Phone.deleteMany()

    console.log("Data Destroyed!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}


if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}