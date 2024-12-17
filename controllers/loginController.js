const { error } = require("console");
const user = require("../models/User.js");
const { Sequelize } = require("sequelize");

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado!' });
        }
        if (user.senha !== senha) { 
            return res.status(401).json({ error: 'Senha incorreta!' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro no servidor!' });
    }
};

module.exports = { login };