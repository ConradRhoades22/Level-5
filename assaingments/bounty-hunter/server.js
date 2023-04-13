const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
uri = process.env.MONGO_URI


//Middleware (for every request)
app.use('/bountys', express.json())// looks for a request body and turns it into a 'req.body
app.use('/bosses', express.json())
app.use(morgan('dev')) // logs requests to the console

// Routes //
app.use('/bountys', require("./routes/bountysRouter.js"));
app.use('/bosses', require('./routes/bossRouter.js'))

//Connect to DB
mongoose.set('strictQuery', true);
const connectDB = async () => {
    try{
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch {
        console.log(err);
        process.exit(1);
    }
}

//error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg : err.message})
})



// Server listen //
connectDB().then(() => {
    app.listen(9000, () => {
        console.log("this server is running on Port 9000")
    }) 
})