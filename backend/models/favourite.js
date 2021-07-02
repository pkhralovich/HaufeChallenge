const User = require("./user");

const { DataTypes } = require('sequelize');
const sequelize = require("../utilities/database");

const Favourite = sequelize.define("Favourite", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    character: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    updatedAt: false,
    createdAt: false
});

Favourite.findByIds = function(ids) {
    return this.findAll({
        where: {
            id: ids
        }
    });
}

module.exports = Favourite;