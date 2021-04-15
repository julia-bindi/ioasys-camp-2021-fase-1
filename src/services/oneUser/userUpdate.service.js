const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { usersRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.userUpdate = async (token, name, email, password) => {
    const verify = promisify(jwt.verify);
    const logged_user = await verify(token, constants.jwtToken);
    
    const user = await usersRepository.getById(logged_user.id);

    if (!user || user.isDelected) {
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

    user.name = name;
    user.email = email;
    user.updatedAt = new Date();

    await usersRepository.update(user);

    const response = "updated";
    return { response };
}