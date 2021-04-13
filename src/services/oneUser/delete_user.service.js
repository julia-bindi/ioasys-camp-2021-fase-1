const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { usersRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.delete_user = async (token, password) => {
    const verify = promisify(jwt.verify);
    const logged_user = await verify(token, constants.jwtToken);
    
    const user = await usersRepository.getById( logged_user.id )

    if (!user) {
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user"),
        };
    }

    const valid = await encryptor.comparePassword(password, user.password);
    if (!valid) {
        throw {
            status: StatusCodes.UNAUTHORIZED,
            message: messages.invalidPassword,
        };
    }

    user.isDelected = true;

    await usersRepository.update(user);

    const response = "delected";

    return { response };
}