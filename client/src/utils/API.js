import axios from "axios";

export default {
  // Gets most recent 5 videos saved to the database for page load
  getDisplay: function() {
    return axios.get("/api/video/");
  },
  // Save a video to the database
  saveVideo: function(videoData) {
    return axios.post("/api/video/save/", videoData)
  },
  // Gets all videos from the database
  getAllVideos: function() {
    return axios.get("api/video/all/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/video/delete/" + id);
  }
  
};
