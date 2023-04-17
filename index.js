//Loads .env file contens into process.envt
require('dotenv').config()

//express,cors library used when it is import in the library ,so it is put it in a variable and .env is not used.
const express = require('express')
const cors = require('cors')

//import connection.js file to connect  mongoose
require('./db/connection')

//import router
const router = require('./routes/router')

//Create server  app using express
const server = express()

//Use cors(share resource with cors orgin request) and express.json() to your server app
//application spoecific middleware
server.use(cors())
server.use(express.json())

//use router in server
server.use(router)

// Create port to listen your server app 
const PORT = process.env.PORT || 3000

//api test
server.get('/',(req,res)=>{
    res.status(200).json('Ecommerce Server started')
})

// Run server app in the specified port
server.listen(PORT,()=>{
    console.log(`Ecommerce Server started at port:${PORT}`);
})