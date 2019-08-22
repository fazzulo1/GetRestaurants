const express = require('express');
const user = express.Router();
const User = require('../models/user');

user.post('/login', (req, res) => {
  console.log('got login', req.body);
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (foundUser.password === req.body.password) {
      console.log('found', foundUser);
      res.status(200).json('Login good');
    } else {
      res.status(200).json('Not good');
    }
  });
});

user.post('/register', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    }
    res.status(200).json(createdUser);
  });
});

module.exports = user;
