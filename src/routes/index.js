const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { newUser } = require("./newUser.routes");
const { newAdm } = require("./newAdm.routes");
const { deleteUser } = require("./deleteUser.routes");
const { userUpdate } = require("./userUpdate.routes");
const { deleteAdm } = require("./deleteAdm.routes");
const { admUpdate } = require("./admUpdate.routes");
const { newMovie } = require("./newMovie.routes");

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
};
