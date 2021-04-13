const { new_user } = require("./new_user.service");
const { new_adm } = require("./new_adm.service");
const { delete_user } = require("./delete_user.service");

module.exports = {
    new_user,
    new_adm,
    delete_user,
};