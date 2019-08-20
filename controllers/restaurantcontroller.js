const express = require('express')
const restaurant = express.Router()
const Restaurant = require('../models/restarauntSchema')




// index
restaurant.get('/', (req,res)=>{
    Restaurant.find({}, (err, foundRestaurant)=> {
        if (err) {
            res.status(400).json({
                error: err.message
            });
        }
        res.status(200).json(foundRestaurant)
    })

})


// create route
restaurant.post('/', (req,res)=> {
    Restaurant.create(req.body, (err, createdRestaurant) => {
        if (err) {
            res.status(400).json({
                error: err.message
            })
        }
        res.status(200).json(createdRestaurant)
    })
})
    
// delete route 

restaurant.delete('/:id', (req,res)=> {
    Restaurant.findByIdAndDelete(req.params.id, (err, deletedRestaurant)=> {
        if (err){
            res.status(400).json({
                error: err.message
            })
        }
        res.status(200).json(deletedRestaurant)
    })
})

// edit
restaurant.get('/:id',(req,res)=> {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, (err, updatedRestaurant)=> {
        if (err) {
            res.status(400).json({
                error: err.message
            });
        }
        res.status(200).json(updatedRestaurant)
    })
})

module.exports = restaurant