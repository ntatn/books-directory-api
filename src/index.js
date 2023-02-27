import "dotenv/config"
import  express  from "express"
import bodyParser from "body-parser"
import connectDb from "./config/connectDB.js"
import book from "./api/v1/routes/book.route.js"

const app = express()
app.use(bodyParser.json())
app.use('/api/v1/books', book)

const PORT = process.env.PORT || 5000
connectDb()
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
