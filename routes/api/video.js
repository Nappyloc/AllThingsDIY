const router = require("express").Router();
const videoController = require("../../controllers/videoController");

// Matches with "/api/books"
router.route("/")
  .get(videoController.findAll)
  .post(videoController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(videoController.findById)
  .put(videoController.update)
  .delete(videoController.remove);

module.exports = router;
