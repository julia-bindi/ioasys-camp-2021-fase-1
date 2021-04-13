const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { new_user } = require("./new_user.routes");
const { new_adm } = require("./new_adm.routes");
const { delete_user } = require("./delete_use.routes");

module.exports = {
  auth,
  users,
  new_user,
  new_adm,
  delete_user,
};
