import express from "express"
import {getAllBooks, addBook, getBook} from "../controllers/book.controller.js"
const router = express.Router()

router.get('/', getAllBooks)
router.get('/:id', getBook)
router.post('/', addBook)


export default router