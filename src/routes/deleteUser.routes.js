const router = require("express").Router();
const { deleteUserController } = require("../controllers")

router.patch("/", deleteUserController.deleteUser);
module.exports.deleteUser = router;
