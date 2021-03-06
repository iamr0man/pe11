const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

const bootcamps = require('./routes/bootcamps')
const courses = require('./routes/courses')

// Load env vars
dotenv.config({ path: './config/config.env' })

//Connect to DB
connectDB();

const app = express();

// Body parser
app.use(express.json())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Mount routes
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT} port.`.yellow.bold));

// Handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
}) 