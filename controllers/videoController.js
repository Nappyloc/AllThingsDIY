const db = require( "../models" );
const  mongoose  = require( "mongoose" );

// Defining methods for the videoController
module.exports = {
  // returns videos for the main pagd did mount function
  findDisplay: function ( req, res )
  {
    db.Video
      .find( req.query )
      .sort( { date: -1 } )
      .limit( 6 )
      .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  },

  // returns videos for logged in user
  findByUserId: function (req, res) {
    db.Video
    .find({user: req.params.user})
    .sort( { _id: -1 } )
    .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  },


  // returns all video's in the database
  findAll: function ( req, res )
  {
    db.Video
      .find( req.query )
      .sort( { date: -1 } )
      .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  },
  // return video in the database with corresponding ID
  findById: function ( req, res )
  {
    db.Video
      .findById( req.params.id )
      .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  },
  // Creates a new video in the database
  create: function ( req, res )
  {
    
    db.Video
      .create( req.body )
      .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  },
  // updates a video by id in the database
  update: function ( req, res )
  {
    db.Video
      .findOneAndUpdate( { _id: req.params.id }, req.body )
      .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  },
  // deletes a video from the database by id
  remove: function ( req, res )
  {
    db.Video
      .findById( { _id: req.params.id } )
      .then( dbModel => dbModel.remove() )
      .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  }
};
