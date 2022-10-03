import express from "express"
import {getAllBooks, addBook, getBook, deleteBook, updateBook} from "../controllers/book.controller.js"
const router = express.Router()

router.get('/', getAllBooks)
router.post('/', addBook)
router.get('/:id', getBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router