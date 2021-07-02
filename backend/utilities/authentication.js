const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

function hash(value) {
    if (value) {
        var shasum = crypto.createHash("sha1");
        shasum.update(value);
        return shasum.digest('hex');
    } else throw "Unable to hash an empty value";
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

async function validateToken(req, res, next) {
    try {
        let token = req.headers.authorization;
        if (token) token = token.replace(/^Bearer\s/, '');
        
        let decoded = jwt.verify(token, process.env.SECRET);
        
        let user = await User.findByPk(decoded.sub);
        req.user = user.toJSON();
        if (req.user) next();
        else res.status(410).send();
      } catch(err) {
        res.status(401).send();
      }
} 

module.exports = {
    hash,
    getToken,
    validateToken
}