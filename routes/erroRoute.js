const express = require('express');
const router = express.Router();

const rotasErro = ["/sobre", "/colecoes", "/contatos", "/recentes", "/populares", "/explorar"];

router.get(rotasErro, (req, res) => {
    res.render('error', { error: null });
});

module.exports = router;