const router = require("express").Router();
const { getMovieController } = require("../controllers")

router.get("/", getMovieController.getMovie);
module.exports.getMovie = router;