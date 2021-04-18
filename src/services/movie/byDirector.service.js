const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { moviesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.byDirector = async (options) => {
    console.log(options);
    var director = ''

    if (options.director && options.director !== "") {
        director = '%'+options.director+'%' ;
    }

    const movies = moviesRepository.getILikeDirector(director);

    if(!movies){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("movie")
        };
    }
    return movies
}