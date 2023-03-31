const express = require('express')
const usersRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const users = [
    {name: "Your Mom", age: 69, _id: uuidv4() },
    {name: "Joe", age: 69, _id: uuidv4() },
    {name: "Your Mom", age: 69, _id: uuidv4() },
    {name: "Balls", age: 69, _id: uuidv4() },
    {name: "killroy", age: 69, _id: uuidv4() },
]

usersRouter.get("/:usersId", (req, res) => {
    const usersId = req.params.usersId
    const foundUser = users.find(user => user._id === usersId)
    res.send(foundUser)
    console.log(req.params.usersId)
})
usersRouter.route("/")
    .get((req, res) => {
        res.send(users)
    })
.post((req, res) => {
        const newUsers =req.body
        newUsers._id = uuidv4()
        users.push(newUsers)
        res.send(`Successfully added ${newUsers.name} to the database.`)
    })

        module.exports = usersRouter