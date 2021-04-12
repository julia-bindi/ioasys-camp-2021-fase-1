const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { usersRepository } = require("../../repositories");
const { promisify } = require("util");
const userRepository = require("../../repositories/user.repository");

module.exports.new_user = async (name, email, password) => {
    const user = await usersRepository.get({ email });

    if(user){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("email"),
        };
    }

    const new_user = {
        name: name,
        email: email,
        password: password,
        is_admin: false,
        is_delected: false,
        created_at: new Date(),
        updated_at: new Date(),
    }
    
    await usersRepository.create(new_user)

    const inserted = await usersRepository.get({ email });

    const payload = {
        id: inserted.id,
        email: inserted.email,
    }

    const sign = promisify(jwt.sign);
    const token = await sign(payload, constants.jwtToken);
  
    return { email, token };
};