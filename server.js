const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Port = 3003;

const restaurantController = require('./controllers/restaurantcontroller');
// Middleware
app.use(express.json());

// app.get('/', (req,res)=> {
//     res.send('hello world')
// })

// CORS
// const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
// const corsOptions = {
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }
// app.use(cors(corsOptions))

app.use('/restaurant', restaurantController);

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

mongoose.connect('mongodb://localhost:27017/bookmark', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});

app.listen(Port, () => console.log('Listening on port:', Port));
