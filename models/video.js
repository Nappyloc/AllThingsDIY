const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const videoSchema = new Schema( {
  title: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  videoId: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
} );

const Video = mongoose.model( "Video", videoSchema );

module.exports = Video;
