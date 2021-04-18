const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { usersRepository } = require("../../repositories");
const { promisify } = require("util");
const userRepository = require("../../repositories/user.repository");

module.exports.newUser = async (name, email, password) => {
    const user = await usersRepository.get({ email });

    if(user){
        if(!user.isDelected){
            throw{
                status: StatusCodes.CONFLICT,
                message: messages.alreadyExists("email"),
            };
        }
    }

    if(!user){
        const new_user = {
            name: name,
            email: email,
            password: password,
            isAdmin: false,
            isDelected: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        
        await usersRepository.create(new_user);
    } else {
        user.isDelected = false;
        user.updatedAt = new Date();

        await userRepository.update(user)
    }

    const inserted = await usersRepository.get({ email });

    const payload = {
        id: inserted.id,
        email: inserted.email,
    }

    const sign = promisify(jwt.sign);
    const token = await sign(payload, constants.jwtToken);
  
    return { email, token };
};