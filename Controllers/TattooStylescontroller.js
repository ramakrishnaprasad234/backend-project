const styletattoo = require('../models/style')
const dotenv = require('dotenv')

// Add a new style
const addStyle = async (req, res) => {
  try {
    const { style_name, image } = req.body;
    // console.log(style_id,style_name, image)

    // Create and save the new style
    const newStyle = new styletattoo({ style_name, image });
    await newStyle.save();

    res.status(201).json({ message: 'Style added successfully', styletattoo: newStyle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all styles
const getAllStyles = async (req, res) => {
  try {
    const styles = await styletattoo.find();
    res.status(200).json(styles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addStyle, getAllStyles };
