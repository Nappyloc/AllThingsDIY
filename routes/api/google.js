const router = require( "express" ).Router();
const googleController = require( "../../controllers/googleController" );


// matches with route "api/google/search/:topic" & google controller search
router.route( '/search/:topic' )
    .get( googleController.search )


module.exports = router;
    