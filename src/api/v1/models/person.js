import {Schema, model} from "mongoose"

const personSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    books: [{ type: Schema.Types.ObjectId, ref: "Book"}]
})

export default model("Person", personSchema)