const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { moviesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.byCategory = async (options) => {
    console.log(options);
    var category = ''

    if (options.category && options.category !== "") {
        category = '%'+options.category+'%' ;
    }

    const movies = moviesRepository.getILikeCategory(category);

    if(!movies){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("movie")
        };
    }
    return movies
}