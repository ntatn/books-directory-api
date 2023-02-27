import book from "../models/book.js"


const getAllBooks = async (req, res, next) =>{
    try {
        const books = await book.find()
        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        })

    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message
            }
        })

    }
}

const addBook = async (req, res, next) =>{
    try {
        const newBook = await book.create(req.body)
        res.status(200).json({
            status: 'ok',
            data: newBook
        })
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message
            }
        })
    }
}

const getBook = async (req, res, next) =>{

    try {
        const singleBook = await book.findById(req.params.id)
        res.status(200).json({
            status: 'ok',
            data: singleBook
        })
        
    } catch (error) {
        res.status(404).json({
            error: {
                message: error.message
            }
        })
    }
}
const updateBook = async (req, res, next) =>{
    try {
        await book.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json({
            success: true,
            message: "Book has been updated",
        })
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message
            }
        })
    }
}
const deleteBook = async (req, res, next) =>{
    try {
        await book.findByIdAndDelete(req.params.id)
        res.status(201).json({
            success: true,
            data: {}
        })

    } catch (error) {
        res.status(404).json({
            error: {
                message: error.message
            }
        })
    }
}
export {getAllBooks, addBook, getBook, deleteBook, updateBook}