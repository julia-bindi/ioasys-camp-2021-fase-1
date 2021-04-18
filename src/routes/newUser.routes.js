const router = require("express").Router();
const { newUserController } = require("../controllers");

router.post("/", newUserController.newUser);
module.exports.newUser = router;