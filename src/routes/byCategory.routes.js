const router = require("express").Router();
const { byCategoryController } = require("../controllers");

router.get("/", byCategoryController.byCategory);
module.exports.byCategory = router;