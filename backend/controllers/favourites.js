const Joi = require("joi");

const Favourite = require("../models/favourite");

const response = require("../utilities/response");

const DUPLICATED_RECORD = 1062;

async function create(req, res) {
    try {
        if (req.user) {
            let characterId = req.params.id;
            let userId = req.user.id;
    
            //Don't validate greater values, assume that the value is in range
            //Otherwise, it's not critical
            let validation = Joi.number().integer().min(1).validate(characterId);
            if (validation.error) {
                res.status(400).send({
                    id: "Missing or invalid character Id"
                });
                return;
            }
    
    
            let record = await Favourite.create({user: userId, character: characterId});
            if (record) res.status(200).send(record.toJSON());
    
        } else res.status(401).send();
    } catch (error) {
        if (error?.original?.errno === DUPLICATED_RECORD) 
            response.status(409).send();
        else response.unhandledError(error, res);
    }
}

async function remove(req, res) {
    try {
        if (req.user) {
            let favouriteId = req.params.id;
            let validation = Joi.number().integer().min(1).validate(favouriteId);
            if (validation.error) {
                res.status(400).send({
                    id: "Missing or invalid favourite Id"
                });
                return;
            }
    
    
            let record = await Favourite.destroy({
                where: { 
                    id: favouriteId 
                }
            });
            if (record) res.status(200).send(record.toJSON());
            else res.status(404).send();
        } else res.status(401).send();
    } catch (error) {
        response.unhandledError(error, res);
    }
}

module.exports = {
    create,
    remove
}