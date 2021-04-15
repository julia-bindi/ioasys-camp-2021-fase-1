const authService = require("./auth");
const usersService = require("./users");
const newUserService = require("./oneUser");
const newAdmService = require("./oneUser");
const deleteUserService = require("./oneUser");
const userUpdateService = require("./oneUser");

module.exports = {
  authService,
  usersService,
  newUserService,
  newAdmService,
  deleteUserService,
  userUpdateService,
};
