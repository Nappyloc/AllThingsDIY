const router = require( "express" ).Router();
const userController = require( "../../controllers/userController" );

// Matches with "api/user/" & User controller findall and create
router.route( "/" )
  .get( userController.findAll )
  .post( userController.createUser );

// Matches with "api/user/:id" & User controller findbyid, update, and remove
router
  .route( "/:id" )
  .get( userController.findById )
  .put( userController.update )
  .delete( userController.remove );

// Matches with "api/user/userCreate" and User controller createUser
router
  .route( "/userCreate" )
  .post( userController.createUser )

// Matches with "api/user/userLogin" and User controller userlogin
router
  .route( "/userLogin" )
  .post( userController.userLogin )

module.exports = router;
