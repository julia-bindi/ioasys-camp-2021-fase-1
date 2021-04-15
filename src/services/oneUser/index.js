const { newUser } = require("./newUser.service");
const { newAdm } = require("./newAdm.service");
const { deleteUser } = require("./deleteUser.service");
const { userUpdate } = require("./userUpdate.service");

module.exports = {
    newUser,
    newAdm,
    deleteUser,
    userUpdate,
};