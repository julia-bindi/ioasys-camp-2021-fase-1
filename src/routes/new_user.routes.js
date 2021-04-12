const router = require("express").Router();
const { new_userController } = require("../controllers");

router.post("/user", new_userController.new_user);
module.exports.new_user = router;