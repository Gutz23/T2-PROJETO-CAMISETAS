const { error } = require("console");
const User = require("../models/User.js");
const { Sequelize } = require("sequelize");

const cadastrarUser = async (req, res) => {
    try {
        const novoUser = await User.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        });
        res.redirect("/login");
    } catch (err){
        if (err.name === "SequelizeValidationError") {
            const messages = err.errors.map((e) => e.message);
            res.status(400).json({ error: messages });
        } else if (err.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({ error: "E-mail já está em uso." });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = { cadastrarUser };