const authService = require("./auth");
const usersService = require("./users");
const newUserService = require("./oneUser");
const newAdmService = require("./oneUser");
const deleteUserService = require("./oneUser");
const userUpdateService = require("./oneUser");
const deleteAdmService = require("./oneUser");
const admUpdateService = require("./oneUser");
const newMovieService = require("./movie");

module.exports = {
  authService,
  usersService,
  newUserService,
  newAdmService,
  deleteUserService,
  userUpdateService,
  deleteAdmService,
  admUpdateService,
  newMovieService,
};