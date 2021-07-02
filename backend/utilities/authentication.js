const crypto = require("crypto");
const jwt = require('jsonwebtoken');

function hash(value) {
    if (value) {
        var shasum = crypto.createHash('sha1')
        shasum.update('foo')
        return shasum.digest('hex')
    } else return value;
}

function getToken(user) {
    if (user) {
        let payload = {
            iss: "Haufe",
            sub: user.id,
            name: user.username,
            iat: Date.now()
        }

        return jwt.sign(payload, process.env.SECRET);
    } else throw "Unable to create token, user is undefined";
}

module.exports = {
    hash,
    getToken
}