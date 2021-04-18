const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { moviesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.byTitle = async (options) => {
    console.log(options);
    var title = ''

    if (options.title && options.title !== "") {
        title = '%'+options.title+'%' ;
    }

    const movies = moviesRepository.getILikeTitle(title);

    if(!movies){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("movie")
        };
    }
    return movies
}