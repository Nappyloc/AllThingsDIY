const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
    .route("/userCreate")
    .post(userController.createUser)

router
    .route("/userLogin")
    .post(userController.userLogin)

module.exports = router;
