import express from "express"
import { getAllPersons,getSinglePerson, addPerson } from "../controllers/person.controller.js"
const router = express.Router()

router.get('/', getAllPersons)
router.get('/:id', getSinglePerson)
router.post('/', addPerson)

export default router