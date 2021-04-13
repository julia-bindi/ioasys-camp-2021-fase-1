const authService = require("./auth");
const usersService = require("./users");
const new_userService = require("./oneUser");
const new_admService = require("./oneUser");
const delete_userService = require("./oneUser");

module.exports = {
  authService,
  usersService,
  new_userService,
  new_admService,
  delete_userService,
};
