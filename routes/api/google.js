const router = require( "express" ).Router();
const googleController = require( "../../controllers/googleController" );

router.route( '/search/:topic' )
    .get( googleController.search )


module.exports = router;
    