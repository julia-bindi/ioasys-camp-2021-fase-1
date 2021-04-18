const { StatusCodes } = require("http-status-codes");

const { moviesRepository, votesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.newVote = async (userId, movieId, note) => {
    const vote = await votesRepository.get({userId, movieId});
    const movie = await moviesRepository.getById(movieId);

    if(!vote){
        const newVote = {
            userId,
            movieId,
            note,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await votesRepository.create(newVote);

        if (movie.note == 0){
            movie.note = note
        }
        else{
            movie.note = (movie.note + note) / 2;
        }

        await moviesRepository.update(movie);
    }
    else{
        const query = {}
        query.where = { movieId: movieId };

        const { count, rows } = await votesRepository.list(query);

        var total = 0;
        for (var i of rows){
            total += i.note
        }
        total = total - vote.note + note;
        vote.note = note;
        vote.updatedAt = new Date();
        movie.note = total/count;

        await moviesRepository.update(movie);
        await votesRepository.update(vote);
    }

    return { result: "voted" }
}