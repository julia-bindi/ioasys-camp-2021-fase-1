const { StatusCodes } = require("http-status-codes");
const { deleteUserService } = require("../services");
const yup = require("yup");

module.exports = {
    deleteUser: async (req, res) => {
        try{
            const schema = yup.object().shape({
                password: yup.string().required(),
            });
        
            await schema.validate(req.body, {
                stripUnknown: true,
            });
            
            const [scheme, token]  = req.headers.authorization.split(" ");
            const {password } = req.body;
            const response = await deleteUserService.deleteUser(token, password);
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