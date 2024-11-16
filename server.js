const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const registerRoute = require('./Routes/registrationrouters')
const styleRoutes = require('./Routes/styleroute')

const app = express()

const port = 5000

dotenv.config()
app.use(express.json());
app.use(bodyparser.json())

mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("mongodb connected")
}).catch((error)=>{
    console.log(`mongodb connection error ${error}`)
})

app.use('/register',registerRoute)

app.use('/Login',registerRoute)

app.use('/style', styleRoutes);

app.listen(port,(req,res)=>{
    console.log("server connected successful")
})