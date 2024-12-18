const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js")

const Camisetas = sequelize.define('Camisetas', {
    codigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco_camiseta: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'Camisetas',
    timestamps: true,
});

module.exports = Camisetas;