const router = require("express").Router();
const { delete_userController } = require("../controllers")

router.patch("/", delete_userController.delete_user);
module.exports.delete_user = router;
