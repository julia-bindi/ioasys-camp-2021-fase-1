const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { new_user } = require("./new_user.routes");

module.exports = {
  auth,
  users,
  new_user,
};
