const { StatusCodes } = require("http-status-codes");
const { newMovieService } = require("../services");
const yup = require("yup");
const { isAdminValidations } = require("../validations");

module.exports = {
    newMovie: async (req, res) => {
        try{
            const schema = yup.object().shape({
                title: yup.string().required(),
                category: yup.string().required(),
                year: yup.string().required(),
                director: yup.string().required(),
                cast: yup.string().required(),
                description: yup.string().required(),
            });

            await schema.validate(req.body, {
                stripUnknown: true,
            });

            const [scheme, token]  = req.headers.authorization.split(" ");
            await isAdminValidations.isAdmin(token);

            const { title, category, year, director, cast, description } = req.body;
            const response = await newMovieService.newMovie(title, category, year, director, cast, description);
            return res.status(StatusCodes.OK).json(response);
        }catch (error){
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