const Joi = require("joi");

const { DataTypes } = require('sequelize');
const sequelize = require("../utilities/database");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    updatedAt: false
});

User.findByUsername = function(username) {
    return this.findOne({
        where: {
            username: username
        }
    });
}

User.createValidation = function() {
    return Joi.object({
        username: Joi.string()
                    .alphanum()
                    .min(4)
                    .max(30)
                    .required(),
        password: Joi.string()
                    .alphanum()
                    .min(8)
                    .max(50)
                    .required()
    });
}

User.loginValidation = function() {
    return Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
}

User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
}

module.exports = User;