const router = require("express").Router();
const { newVoteController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/", newVoteController.newVote);
module.exports.newVote = router;