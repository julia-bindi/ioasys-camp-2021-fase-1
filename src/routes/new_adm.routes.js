const router = require("express").Router();
const { new_admController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/", new_admController.new_adm);
module.exports.new_adm = router;