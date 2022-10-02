import book from "../models/book.js"
import person from "../models/person.js"

const getAllBooks = async (req, res, next) =>{
    try {
        const books = await book.find()
        res.status(200).json({
            status: 'OK',
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
    const authorId = req.body.author
    try {
        const newBook = await book.create({...req.body, author: authorId})
        const findAuthor = person.findById(authorId)
        await findAuthor.findOneAndUpdate({books: newBook._id})

        res.status(200).json({
            status: 'ok',
            data: book
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

export {getAllBooks, addBook, getBook}