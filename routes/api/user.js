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

// Matches with "api/user/createUser" and User controller createUser
router
  .route( "/createUser" )
  .post( userController.createUser )

// Matches with "api/user/userLogin" and User controller userlogin
router
  .route( "/userLogin" )
  .post( userController.userLogin )

module.exports = router;
