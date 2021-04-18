const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { newUser } = require("./newUser.routes");
const { newAdm } = require("./newAdm.routes");
const { deleteUser } = require("./deleteUser.routes");
const { userUpdate } = require("./userUpdate.routes");
const { deleteAdm } = require("./deleteAdm.routes");
const { admUpdate } = require("./admUpdate.routes");
const { newMovie } = require("./newMovie.routes");
const { newVote } = require("./newVote.routes");
const { getMovie } = require("./getMovie.routes");
const { byTitle } = require("./byTitle.routes");
const { byCategory } = require("./byCategory.routes");
const { byDirector } = require("./byDirector.routes");
const { byCast } = require("./byCast.routes");
const { getVote }= require("./getVote.routes");

module.exports = {
  auth,
  users,
  newUser,
  newAdm,
  deleteUser,
  userUpdate,
  deleteAdm,
  admUpdate,
  newMovie,
  newVote,
  getMovie,
  byTitle,
  byCategory,
  byDirector,
  byCast,
  getVote,
};
