const { StatusCodes } = require("http-status-codes");
const { newUserService } = require("../services");
const yup = require("yup");

module.exports = {
    newUser: async (req, res) => {
        try{
            const schema = yup.object().shape({
                name: yup.string().required(),
                email: yup.string().required().email(),
                password: yup.string().required(),
              });

              await schema.validate(req.body, {
                stripUnknown: true,
              });

              const { name, email, password } = req.body;
              const response = await newUserService.newUser(name, email, password);
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
    },
};