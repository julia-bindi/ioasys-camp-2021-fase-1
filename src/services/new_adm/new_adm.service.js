const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { usersRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.new_adm = async (token, name, email, password) => {
    const verify = promisify(jwt.verify);
    const logged_user = await verify(token, constants.jwtToken);
    
    const user = await usersRepository.getById( logged_user.id )

    if (!user) {
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user"),
        };
    }

    if(!user.isAdmin) {
        throw {
            status: StatusCodes.NOT_ACCEPTABLE,
            message: messages.authMissing,
        };
    }

    const exist = await usersRepository.get({ email });

    if(exist){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("email"),
        };
    }

    const new_adm = {
        name: name,
        email: email,
        password: password,
        isAdmin: true,
        isDelected: false,
        created_at: new Date(),
        updated_at: new Date(),
    }
    
    await usersRepository.create(new_adm)

    const inserted = await usersRepository.get({ email });

    const payload = {
        id: inserted.id,
        email: inserted.email,
    }

    const sign = promisify(jwt.sign);
    const new_adm_token = await sign(payload, constants.jwtToken);
  
    return { email, new_adm_token };
};