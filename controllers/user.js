const express = require('express');
const user = express.Router();
const User = require('../models/user');

user.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    }
    res.status(200).json(createdUser);
  });
});
