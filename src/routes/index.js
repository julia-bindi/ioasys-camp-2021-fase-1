const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { newUser } = require("./newUser.routes");
const { newAdm } = require("./newAdm.routes");
const { deleteUser } = require("./deleteUser.routes");
const { userUpdate } = require("./userUpdate.routes");

module.exports = {
  auth,
  users,
  newUser,
  newAdm,
  deleteUser,
  userUpdate,
};
