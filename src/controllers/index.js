const usersController = require("./users.controller");
const authController = require("./auth.controller");
const new_userController = require("./new_user.controller");
const new_admController = require("./new_adm.controller");
const delete_userController = require("./delete_user.controller");

module.exports = {
  usersController,
  authController,
  new_userController,
  new_admController,
  delete_userController,
};
