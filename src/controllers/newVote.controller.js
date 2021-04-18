const { StatusCodes } = require("http-status-codes");
const { newVoteService } = require("../services");
const yup = require("yup");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { constants } = require("../utils");

module.exports = {
    newVote: async (req, res) => {
        try {
            const schema = yup.object().shape({
                note: yup.number().required()
            });
            
            await schema.validate(req.body, {
                stripUnknown: true,
            });

            const [scheme, token]  = req.headers.authorization.split(" ");
            const { movieId } = req.query;
            const { note } = req.body;

            const verify = promisify(jwt.verify);
            const logged_user = await verify(token, constants.jwtToken);

            const response = await newVoteService.newVote(logged_user.id, movieId, note)
      
            return res.status(StatusCodes.OK).json(response);
          } catch (error) {
            console.log(error);
            return res
              .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
              .json(error.messages);
          }
    },
};