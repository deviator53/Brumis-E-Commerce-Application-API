const express = require('express');
const router = express.Router();
const registerUser = require('../../controllers/auth/register');
const loginUser = require('../../controllers/auth/login');
const confirmEmail = require('../../controllers/auth/confirmEmail');


router.post('/register', registerUser);

router.post('/confirm-user', confirmEmail);


router.post('/login', loginUser);



module.exports = router;