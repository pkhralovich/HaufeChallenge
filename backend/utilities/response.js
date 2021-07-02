function unhandledError(error, res) {
    res.status(500).send({
        message: error.message ? error.message : error
    });
}

module.exports = {
    unhandledError
}