const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

const connectDB = async () => {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    console.log(`Mongo Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;