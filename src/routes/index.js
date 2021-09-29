const express = require('express');

const router = express.Router();

// Controller
// import controller function here
const { addUsers, getUser, getUsers } = require('../controllers/user');

// Route
router.post('/user', addUsers);
// add route here
router.get('/users', getUsers);
router.get('/user/:id', getUser);

module.exports = router;
