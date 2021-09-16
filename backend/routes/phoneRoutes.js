import express from "express"
const router = express.Router()
import { getPhones, getPhoneById, createPhone } from "../controllers/phoneController.js"

router.route("/")
  .get(getPhones)
  .post(createPhone)
router.route("/:id").get(getPhoneById)




export default router