const router = require("express").Router();
const { byCastController } = require("../controllers");

router.get("/", byCastController.byCast);
module.exports.byCast = router;