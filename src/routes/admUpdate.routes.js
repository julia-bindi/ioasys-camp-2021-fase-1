const router = require("express").Router();
const { admUpdateController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.put("/", admUpdateController.admUpdate);
module.exports.admUpdate = router;