const express = require('express')
const {registrations,registrtionLogin} = require('../Controllers/registationController')

const router = express.Router()

router.post("/Register",registrations)
router.post("/login",registrtionLogin)


module.exports = router