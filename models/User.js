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
    }
}, {
    tableName: 'User',
    timestamps: true,
});

module.exports = User;