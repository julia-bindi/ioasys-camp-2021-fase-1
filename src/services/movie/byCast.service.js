const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { moviesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.byCast = async (options) => {
    console.log(options);
    var cast = ''

    if (options.cast && options.cast !== "") {
        cast = '%'+options.cast+'%' ;
    }

    const movies = moviesRepository.getILikeCast(cast);

    if(!movies){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("movie")
        };
    }
    return movies
}