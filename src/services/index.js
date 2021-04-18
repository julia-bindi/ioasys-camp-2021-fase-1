const authService = require("./auth");
const usersService = require("./users");
const newUserService = require("./oneUser");
const newAdmService = require("./oneUser");
const deleteUserService = require("./oneUser");
const userUpdateService = require("./oneUser");
const deleteAdmService = require("./oneUser");
const admUpdateService = require("./oneUser");
const newMovieService = require("./movie");
const newVoteService = require("./vote");
const getMovieService = require("./movie");
const byTitleService = require("./movie");
const byCategoryService = require("./movie");
const byDirectorService = require("./movie");
const byCastService = require("./movie");

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
  newVoteService,
  getMovieService,
  byTitleService,
  byCategoryService,
  byDirectorService,
  byCastService,
};