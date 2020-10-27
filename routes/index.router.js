const express = require('express');
const router = express.Router();

// ctrlUser has the exported register function from user.controller.js
const ctrlUser = require('../controllers/user.controller');

// ctrlUser.register is the function which can handle the user sign up request from the client side (declined in user.controller)
router.post('/register', ctrlUser.register);

// using this exported router constant we can configure routing middleware inside this app
module.exports = router;