const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { moviesRepository } = require("../../repositories");
const { promisify } = require("util");
const { stringify } = require("querystring");

module.exports.byTitle = async (title) => {
    title = stringify(title)
    title = title.toLowerCase
    const movies = moviesRepository.getLike(title);

    if(!movies){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("movie")
        };
    }
    return movies
}