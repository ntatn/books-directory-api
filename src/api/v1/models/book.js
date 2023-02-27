import { Schema, model } from "mongoose"

const bookSchema = new Schema({
    title: { 
        type: String,
        required: true,
        minlength: 3
    },
    isPublished: { 
        type: Boolean, 
        required: true
    },
    page_count: { 
        type: Number,
        required: true,
        min: 10
    },
    published_date: { 
        type: Date,
        default: Date.now(),
        required: true
    },
    author: {
        type: String,
        required: true,
        minlength: 3
    }
})

export default model("Book", bookSchema)