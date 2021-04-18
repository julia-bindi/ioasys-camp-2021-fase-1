const { newMovie } = require("./newMovie.service");
const { getMovie } = require("./getMovie.service");
const { byTitle } = require("./byTitle.service");

module.exports = {
    newMovie,
    getMovie,
    byTitle,
}