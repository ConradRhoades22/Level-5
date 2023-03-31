const express = require('express')
const carsRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const cars = [
    {make: "Dodge", year: 2011, type:"Sedan", _id: uuidv4()},
    {make: "Toyota", year: 1991, type:"Truck", _id: uuidv4()},
    {make: "Nissan", year: 2001, type:"Sport", _id: uuidv4()},
    {make: "Ford", year: 1975, type:"4-door", _id: uuidv4()},
]
// get all
carsRouter.get("/", (req, res) => {
    res.send(cars)
})

//get by type
carsRouter.get("/serch/type", (req, res) => {
    const type = req.query.type
    const filteredCars = cars.filter(car => car.type === type)
    res.send(filteredCars)
})

//post one
carsRouter.post("/cars", (req, res) => {
    const newCars =req.body
    newCars._id = uuidv4()
    cars.push(newCars)
    res.send(`Successfully added ${newCars.name} to the database.`)
})

// delete one
carsRouter.delete("/:carsId", (req, res) => {
    const carsId = req.params.carsId
    const carsIndex = cars.find(car => cars._id === carsId)
    cars.splice(carsIndex, 1)
    res.send("Successfully deleted the car.")
})

// get one
carsRouter.get("/:carsId", (req, res) => {
    const carsId = req.params.carsId
    const foundCar = cars.find(car => car._id === carsId)
    res.send(foundCar)
})

//Update one

carsRouter.put("/:carsId", (req, res) => {
    const carsId = req.params.carsId
    const updatedObject = req.body
    const carsIndex = cars.findIndex(car => car._id === carsId)
    const updatedCar = Object.assign(cars[carsIndex], updatedObject)
    res.send(updatedCar) 
})
module.exports = carsRouter