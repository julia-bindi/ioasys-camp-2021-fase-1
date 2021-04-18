const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { usersRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.newAdm = async (name, email, password) => {

    const exist = await usersRepository.get({ email });

    if(exist){
        if(!exist.isDelected){
            throw{
                status: StatusCodes.CONFLICT,
                message: messages.alreadyExists("email"),
            };
        }    
    }

    if(!exist){
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
    }
    else{
        exist.isDelected = false;
        exist.updatedAt = new Date();

        await usersRepository.update(exist);
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