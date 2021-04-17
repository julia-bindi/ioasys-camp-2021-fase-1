const { StatusCodes } = require("http-status-codes");

const { encryptor, messages } = require("../../helpers");
const { moviesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.newMovie = async (title, category, year, director, cast, description) => {
    const movie = await moviesRepository.get({title});

    if(movie){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("movie")
        }
    }
    
    new_movie = {
        title: title,
        category: category,
        year: year,
        director: director,
        cast: cast,
        description: description,
        note: 0.0,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    await moviesRepository.create(new_movie);

    return { title, note }
}