const { error } = require("console");
const user = require("../models/User.js");
const { Sequelize } = require("sequelize");

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const foundUser = await user.findOne({ where: { email } });

        if (!foundUser) {
            return res.status(404).json({ error: 'Usuário não encontrado!' });
        }
        if (foundUser.senha !== senha) { 
            return res.status(401).json({ error: 'Senha incorreta!' });
        }
        res.redirect("/home")
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro no servidor!' });
    }
};

module.exports = { login };