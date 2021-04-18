const router = require("express").Router();
const { byDirectorController } = require("../controllers");

router.get("/", byDirectorController.byDirector);
module.exports.byDirector = router;