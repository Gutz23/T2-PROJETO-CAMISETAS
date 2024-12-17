const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js")

const User = sequelize.define('User', {
    codigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Por favor, insira um e-mail válido.",
            },
        },
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: [/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/],
                msg: "A senha deve ter pelo menos uma letra, um número, um caractere especial e entre 6 a 20 caracteres.",
            },
        },
    }
}, {
    tableName: 'User',
    timestamps: true,
});

module.exports = User;