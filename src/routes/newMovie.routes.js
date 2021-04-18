const router = require("express").Router();
const { newMovieController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/", newMovieController.newMovie);
module.exports.newMovie = router;