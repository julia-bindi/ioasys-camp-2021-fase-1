const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { moviesRepository } = require("../../repositories");
const { promisify } = require("util");
const { stringify } = require("querystring");

module.exports.byCategory = async (category) => {
    category = stringify(category)
    category = category.toLowerCase
    const movies = moviesRepository.getLike(category);

    if(!movies){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("movie")
        };
    }
    return movies
}