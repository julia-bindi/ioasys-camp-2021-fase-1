const router = require("express").Router();
const { deleteUserController } = require("../controllers")
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.patch("/", deleteUserController.deleteUser);
module.exports.deleteUser = router;
