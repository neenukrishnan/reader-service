const mongoose = require('mongoose')

require("dotenv").config()

const readerUri = process.env.MONGODB_READER_URI

const connectReader = async () => {
    try {
        await mongoose.connect(readerUri)
        console.log("Connected to Reader MongoDB");
    } catch (error) {
        console.error("Error: ", error.message);
        process.exit(1)
    }
}

module.exports = connectReader