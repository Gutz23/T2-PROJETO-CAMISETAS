const express = require('express');
const router = express.Router();
const loginController =  require('./controllers/userController');

router.get("/login",verifyAccessToken, loginController.login);

module.exports = router;