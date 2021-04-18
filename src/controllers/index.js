const usersController = require("./users.controller");
const authController = require("./auth.controller");
const newUserController = require("./newUser.controller");
const newAdmController = require("./newAdm.controller");
const deleteUserController = require("./deleteUser.controller");
const userUpdateController = require("./userUpdate.controller");
const deleteAdmController = require("./deleteAdm.controller");
const admUpdateController = require("./admUpdate.controller");
const newMovieController = require("./newMovie.controller");
const newVoteController = require("./newVote.controller");
const getMovieController = require("./getMovie.controller");
const byTitleController = require("./byTitle.controller");
const byCategoryController = require("./byCategory.controller");
const byDirectorController = require("./byDirector.controller");
const byCastController = require("./byCast.controller");

module.exports = {
  usersController,
  authController,
  newUserController,
  newAdmController,
  deleteUserController,
  userUpdateController,
  deleteAdmController,
  admUpdateController,
  newMovieController,
  newVoteController,
  getMovieController,
  byTitleController,
  byCategoryController,
  byDirectorController,
  byCastController,
};
