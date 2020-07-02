import axios from "axios";

export default {
  // Gets most recent 5 videos saved to the database for page load
  getDisplay: function ()
  {
    return axios.get( "/api/video/" );
  },
  // Save a video to the database
  saveVideo: function ( videoData )
  {
    return axios.post( "/api/video/save", videoData )
  },
  // Gets all videos from the database
  getAllVideos: function ()
  {
    return axios.get( "api/video/all/" );
  },
  // Deletes the book with the given id
  deleteVideo: function ( id )
  {
    return axios.delete( "/api/video/delete/" + id );
  },
  createUser: function ( userData )
  {
    return axios.post( "/api/user/createUser", userData )
  },
  userLogin: function ( userData )
  {
    return axios.post( "/api/user/userLogin", userData )
  },

  // Youtube search
  topicSearch: function ( searchTopic )
  {
    return axios.get( "api/google/search/" + searchTopic )

  },

  // Returns recent saved videos
  savedSearch: function ()
  {
    return axios.get( "/api/video/" )
  },

  // Returns videos saved by logged in user
  loadMyVideos: function(user) {
    return axios.get("api/video/user/" + user)
  }

  
};
