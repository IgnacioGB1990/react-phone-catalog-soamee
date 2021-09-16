import express from "express"
const router = express.Router()
import { getPhones, getPhoneById, createPhone, deletePhone, updatePhone } from "../controllers/phoneController.js"

router.route("/")
  .get(getPhones)
  .post(createPhone)
router.route("/:id")
  .get(getPhoneById)
  .delete(deletePhone)
  .put(updatePhone)




export default router