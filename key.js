require( 'dotenv' ).config()
var API_KEY = process.env.TUBE_KEY
var MONGO_USER = process.env.MONGO_USER1
module.exports = {
    API_Key: API_KEY,
    MONGO_USER: MONGO_USER
}