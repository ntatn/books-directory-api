import { Schema, model } from "mongoose"

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    published_date: {
        type: Date,
        default: Date.now
    },
    genres: { 
        type: [String] 
    },
    author: {type: Schema.Types.ObjectId}
})

export default model("Book", bookSchema)