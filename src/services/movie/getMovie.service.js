const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { moviesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.getMovie = async (movieId) => {
    const movie = await moviesRepository.getById(movieId);

    if(!movie){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("movie")
        };
    }

    const returnMovie = {
        id: movie.id,
        title: movie.title,
        category: movie.category,
        year: movie.year,
        director: movie.director,
        cast: movieId.cast,
        description: movie.description,
        note: movie.note,
    }

    return returnMovie
}