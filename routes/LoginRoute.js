const express = require('express');
const router = express.Router();
const loginController =  require('../controllers/loginController');

router.post("/login", loginController.login);
router.get("/login", (req, res) => {
    res.render('login');
});

module.exports = router;