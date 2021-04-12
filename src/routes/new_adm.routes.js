const router = require("express").Router();
const { new_admController } = require("../controllers");

router.post("/", new_admController.new_adm);
module.exports.new_adm = router;