
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const styleSchema = new mongoose.Schema({
  style_id: { 
    type: Number, 
     default: uuidv4(),
    unique: true 
  },
  style_name: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  }, // URL to the image
});

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;

