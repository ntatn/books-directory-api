import express from "express"
import { getAllPersons,getSinglePerson, addPerson, updatePerson, removePerson } from "../controllers/person.controller.js"
const router = express.Router()

router.get('/', getAllPersons)
router.get('/:id', getSinglePerson)
router.post('/', addPerson)
router.put('/:id', updatePerson)
router.delete('/:id', removePerson)
export default router