const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { votesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.getVote = async (userId, movieId) => {
    const vote = await votesRepository.get({userId, movieId});

    if(!vote){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("vote")
        }
    }

    return { userId: userId, movieId: movieId, note: vote.note }
}