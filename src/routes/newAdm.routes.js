const router = require("express").Router();
const { newAdmController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/", newAdmController.newAdm);
module.exports.newAdm = router;