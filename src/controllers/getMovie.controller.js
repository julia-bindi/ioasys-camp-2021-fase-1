const { StatusCodes } = require("http-status-codes");
const { getMovieService } = require("../services");
const yup = require("yup");

module.exports = {
    getMovie: async (req, res) => {
        try{
            const schema = yup.object().shape({
                movieId: yup.number().required()
            });

            await schema.validate(req.body, {
                stripUnknown: true,
            });

            const { movieId } = req.body;
            const response = await getMovieService.getMovie(movieId);
            return res.status(StatusCodes.OK).json(response);
        }catch (error) {
            console.error(error);
            return res
                .status(
                error.name == "ValidationError"
                    ? StatusCodes.UNPROCESSABLE_ENTITY
                    : error.status || StatusCodes.INTERNAL_SERVER_ERROR
                )
                .json(error.message);
        }
    }
}