const router = require("express").Router();
const { byTitleController } = require("../controllers");

router.get("/", byTitleController.byTitle);
module.exports.byTitle = router;
