const axios = require("axios");

const Favourite = require("../models/favourite");

const response = require("../utilities/response");

const ENDPOINT = "https://rickandmortyapi.com/api/character";

function removeProperties(item) {
    delete item.episode;
    delete item.url;
    delete item.created;

    item.origin = item.origin.name;
    item.location = item.location.name;
}

async function getExternalCharacters(page) {
    return axios.get(ENDPOINT, {
        params: {
            page
        }
    });
}

async function getCharacters(req, res) {
    try {
        if (req.user) {
            let response = await getExternalCharacters(req.query.page ? req.query.page : 1);
            let data = response.data;

            if (data.results) {
                //Build array of returned Ids
                let ids = [];
                data.results.forEach(item => {
                    removeProperties(item);
                    ids.push(item.id);
                });

                //Retrieves information about favourites from BBDD
                let records = await Favourite.findByIds(ids);

                //Add favourites information to result
                records.forEach(record => {
                    let character = data.results.find(char => char.id === record.character);
                    if (character) character.favourite = record.id;
                });
            }  

            res.status(200).send(data);
        }
        else res.status(401).send();
    } catch (error) {
        response.unhandledError(error, res);
    }
}

module.exports = {
    getCharacters
}