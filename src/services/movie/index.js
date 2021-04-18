const { newMovie } = require("./newMovie.service");
const { getMovie } = require("./getMovie.service");
const { byTitle } = require("./byTitle.service");
const { byCategory } = require("./byCategory.service");
const { byDirector } = require("./byDirector.service");
const { byCast } = require("./byCast.service");

module.exports = {
    newMovie,
    getMovie,
    byTitle,
    byCategory,
    byDirector,
    byCast,
}