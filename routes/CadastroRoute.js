const express = require('express');
const router = express.Router();
const cadastroController =  require('../controllers/cadastroController');

router.post("/cadastro", cadastroController.cadastrarUser);
router.get("/cadastro", (req, res) => {
    res.render('cadastro');
});

module.exports = router;