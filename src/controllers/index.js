const usersController = require("./users.controller");
const authController = require("./auth.controller");
const newUserController = require("./newUser.controller");
const newAdmController = require("./newAdm.controller");
const deleteUserController = require("./deleteUser.controller");
const userUpdateController = require("./userUpdate.controller");
const deleteAdmController = require("./deleteAdm.controller")

module.exports = {
  usersController,
  authController,
  newUserController,
  newAdmController,
  deleteUserController,
  userUpdateController,
  deleteAdmController,
};
