const express = require( "express" );

const mongoose = require( "mongoose" );
const routes = require( "./routes" );
const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_USER = require( "./key" ).MONGO_USER

// Define middleware here
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
// Serve up static assets (usually on heroku)
if ( process.env.NODE_ENV === "production" )
{
  app.use( express.static( "client/build" ) );
}
// Add routes, both API and view
app.use( routes );

// Connect to the Mongo DB
 mongoose.connect( process.env.MONGODB_URI || "mongodb://" + MONGO_USER + "@ds161134.mlab.com:61134/heroku_ndtwk6dp", { useNewUrlParser: true, useUnifiedTopology: true } );
// mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/youTubeSearch", { useNewUrlParser: true, useUnifiedTopology: true } );

// Start the API server
app.listen( PORT, function ()
{
  console.log( `🌎  ==> API Server now listening on PORT ${ PORT }!` );
} );
