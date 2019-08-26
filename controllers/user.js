const express = require('express');
const user = express.Router();
const User = require('../models/user');

// log in
user.post('/login', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (foundUser.password === req.body.password) {
      res.status(200).json(foundUser);
    } else {
      res.status(200).json('Not good');
    }
  });
});

// sign up
user.post('/register', (req, res) => {
  console.log('received', req.body);
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    }
    console.log('created', createdUser);
    res.status(200).json(createdUser);
  });
});

// edit
user.put('/:id', (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    }
    res.status(200).json(updatedUser);
  });
});

module.exports = user;
