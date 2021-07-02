const User = require("../models/user");

const validation = require("../utilities/validation");
const response = require("../utilities/response");
const authentication = require('../utilities/authentication');

async function create(req, res) {
    try {
        let validationResult = User.createValidation().validate(req.body, { abortEarly: false });

        if (validationResult.error) {
            let responseBody = validation.extractErrors(validationResult);
            res.status(400).send(responseBody);
        } else {
            let user = await User.findByUsername(req.body.username);
            if (user) {
                res.status(409).send({
                    message: "User already exists"
                });
            } else {
                let newUser = {
                    ...
                    req.body,
                    password: authentication.hash(req.body.password)
                }

                newUser = await User.create(newUser);
                res.status(200).send(newUser.toJSON());
            }
        }
    } catch (error) {
        response.unhandledError(error, res);
    }
}

async function login(req, res) {
    try {
        let validationResult = User.loginValidation().validate(req.body, { abortEarly: false});
        if (validationResult.error) {
            let responseBody = validation.extractErrors(validationResult);
            res.status(400).send(responseBody);
        } else {
            let user = await User.findByUsername(req.body.username);
            if (user) {
                let hashedPassword = authentication.hash(req.body.password);
                if (user.password === hashedPassword) {
                    res.status(200).send({
                        token: authentication.getToken(user)
                    });
                    return;
                }
            }

            res.status(401).send();
        }
    } catch(error) {
        response.unhandledError(error, res);
    }
}

module.exports = {
    create,
    login
}