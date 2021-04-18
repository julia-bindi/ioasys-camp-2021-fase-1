const router = require("express").Router();
const { userUpdateController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.put("/", userUpdateController.userUpdate);
module.exports.userUpdate = router;