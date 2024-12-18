const express = require('express');
const router = express.Router();
const { cadastrarUser } = require("../controllers/CadastroController");

router.get("/cadastro", (req, res) => {
    res.render('cadastro', { error: null });
});

router.post("/cadastro", async (req, res) => {
    await cadastrarUser(req, res);
});

module.exports = router;