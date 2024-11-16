const express = require('express');
const { addStyle, getAllStyles } = require('../Controllers/TattooStylescontroller');

const router = express.Router();

router.post('/styles', addStyle); // Route to add a new style
router.get('/styles', getAllStyles); // Route to fetch all styles

module.exports = router;
