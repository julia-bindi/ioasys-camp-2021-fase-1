const router = require("express").Router();
const { getVoteController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.get("/", getVoteController.getVote);
module.exports.getVote = router;