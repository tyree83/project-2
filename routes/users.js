const express = require('express');
const router = express.Router();
const userCTRL = require('../controllers/users');
const user = require('../models/user');

const authorization = require('../utils/authorization');

router.get('/new', userCTRL.new);

router.post('/signup', userCTRL.signUp);

router.get('/signin', userCTRL.signIn);

router.get('/signout', userCTRL.signOut);

router.post('/login', userCTRL.login);


module.exports = router;