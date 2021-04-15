const router = require("express").Router();
const { deleteAdmController } = require("../controllers")
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.patch("/", deleteAdmController.deleteAdm);
module.exports.deleteUser = router;
