const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Port = process.env.PORT || 3003;

const restaurantController = require('./controllers/restaurantcontroller');
const userController = require('./controllers/user');
// Middleware
app.use(express.json());

// CORS;
const whitelist = ['http://localhost:3000', 'disastrous-north.surge.sh'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));

app.use('/restaurant', restaurantController);
app.use('/user', userController);

// seed
const seed = require('./models/seed');
const Restaurant = require('./models/restarauntSchema');
app.get('/seed', (req, res) => {
  Restaurant.create(seed, (err, createdRestaurant) => {
    res.redirect('/restaurant');
  });
});

// Error / Disconnection
mongoose.connection.on('error', err =>
  console.log(err.message + ' is Mongod not running?')
);
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});

app.listen(Port, () => console.log('Listening on port:', Port));
