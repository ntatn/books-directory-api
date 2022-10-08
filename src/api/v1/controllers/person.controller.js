import person from "../models/person.js"
import book from "../models/book.js"
const getAllPersons = async (req, res, next) => {
    try {
        const persons = await person.find()
        res.status(200).json({
            status: "Success",
            data: persons
        })
       

    } catch (error) {
        res.status(500).json(error)
    }
}
const getSinglePerson = async (req, res, next) => {
    try {
        const singlePerson = await person.findById(req.params.id).populate("books", "-author -__v")
        res.status(200).json({
            status: 'ok',
            data: singlePerson
        })

    } catch (error) {
        res.status(404).json({
            error: {
                message: error.message
            }
        })
    }
}
const addPerson = async (req, res, next) => {
    const {name, year, books} = req.body
    try {
        await person.create({name, year, books})
        res.status(200).json({
            message: "Create person successfully!"
        })
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message
            }
        })
    }
}

const updatePerson = async (req, res, next) => {
    try{
        await person.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json({
            success: true,
            message: person
        })
    }catch(error){
        res.status(404).json({
            error: {
                message: error.message
            }
        })
    }
}

const removePerson = async (req, res, next) => {
    const authorId = req.params.id
    try{
        await person.findByIdAndDelete(authorId)
        // await book.findByIdAndUpdate(person._id, {$set: {author: null}})
        res.status(200).json({
            success: true,
            message: "Successfully removed"
        })
        
    }catch(error){
        res.status(404).json({
            error: {
                message: error.message
            }
        })
    }
}
export {getAllPersons, getSinglePerson, addPerson, updatePerson, removePerson}