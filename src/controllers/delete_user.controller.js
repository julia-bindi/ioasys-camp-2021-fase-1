const { StatusCodes } = require("http-status-codes");
const { delete_userService } = require("../services");
const yup = require("yup");

module.exports = {
    delete_user: async (req, res) => {
        try{
            const schema = yup.object().shape({
                token: yup.string().required(),
                password: yup.string().required(),
            });
        
            await schema.validate(req.body, {
                stripUnknown: true,
            });
        
            const { token, password } = req.body;
            const response = await delete_userService.delete_user(token, password);
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