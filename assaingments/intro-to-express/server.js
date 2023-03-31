const express = require("express")
const app = express()


//Middleware (for every request)
app.use('/users', express.json()) //Looks for a request body, and turns it into a 'req.body'

//Routes
app.use('/users', require("./routes/usersRouter.js"))
app.use('/cars', require("./routes/carsRouter.js"))

//Server Listen
// arguments: 1. PORT and 2. CB
app.listen(9000, () => {
    console.log("this server is running on Port 9000")
})