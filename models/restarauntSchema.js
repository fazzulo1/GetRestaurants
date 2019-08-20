const mongoose = require('mongoose');

const restarauntSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  address: { type: String, default: 'No address provided' },
  theme: [String],
  menu: [String],
  like: { type: Number, default: 0 },
  url: { type: String, default: 'This restaraunt does not have a website' },
  phone: { type: String, default: 'No phone number provided' }
});

module.exports = mongoose.model('Restaraunts', restarauntSchema);
