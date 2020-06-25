const router = require("express").Router();
const videoController = require("../../controllers/videoController");

// Matches with "/api/video" & Video controller file find all and create
router.route("/")
  .get(videoController.findAll)
  .post(videoController.create);

// Matches with "/api/video/:id" & Video controller find by id, update, and remove
router
  .route("/:id")
  .get(videoController.findById)
  .put(videoController.update)
  .delete(videoController.remove);


// Matches with "/api/video/save" & Video controller create
  router
  .route("/save")
  .post(videoController.create)

module.exports = router;
