import person from "../models/person.js"

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
        const singlePerson = await person.findById(req.params.id).populate("books")
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

export {getAllPersons, getSinglePerson, addPerson}