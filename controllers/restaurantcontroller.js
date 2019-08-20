const express = require('express')
const restaurant = express.Router()




restaurant.get('/', (req,res)=>{
    res.send('blue pie')
})
    

module.exports = restaurant