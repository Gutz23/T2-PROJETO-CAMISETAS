import { error } from "console";
import User from "../models/User"
import sequelize from "sequelize"

const User = require("../models/User");

const cadastrarUser = async (req, res) => {
    try {
        const user = await user.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        });
        res.status(201).json(user);
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

export default cadastrarUser;