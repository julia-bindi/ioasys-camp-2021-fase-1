const { StatusCodes } = require("http-status-codes");
const { getVoteService } = require("../services");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { constants } = require("../utils");

module.exports = {
    getVote: async (req, res) => {
        try {
            const [scheme, token]  = req.headers.authorization.split(" ");
            const { movieId } = req.query;

            const verify = promisify(jwt.verify);
            const logged_user = await verify(token, constants.jwtToken);

            const response = await getVoteService.getVote(logged_user.id, JSON.parse(movieId))
      
            return res.status(StatusCodes.OK).json(response);
        } catch (error) {
            console.log(error);
            return res
              .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
              .json(error.messages);
        }
    },
};