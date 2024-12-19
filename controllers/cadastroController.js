const { error } = require("console");
const User = require("../models/User.js");
const { Sequelize } = require("sequelize");

const checarEmail = async (email) => {
    try {
        const usuarioExistente = await User.findOne({ where: { email } });
        return usuarioExistente !== null;
    } catch (error) {
        console.error("Erro ao verificar e-mail:", error);
        throw new Error("Erro ao verificar e-mail.");
    }
};

const cadastrarUser = async (req, res) => {
    try {
        const emailJaExiste = await checarEmail(req.body.email);
        if (emailJaExiste) {
            return res.status(400).render("cadastro", { error: ["O e-mail já está em uso."] });
        }
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
        } else {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = { cadastrarUser };