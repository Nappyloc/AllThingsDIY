const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/youTubeSearch"
);

const videoSeed = [
  {
    title: "The Mid-Century Modern Bookcase - Easy DIY Project",
    author: "The Rehab Life",
    url: "https://www.youtube.com/watch?v=sL3LkDnhtqs",
    date: new Date(Date.now())
  },
  {
    title: "Making A Simple Bookcase - Limited Tools Build for Beginning Woodworkers",
    author: "Chris Salomone",
    url: "https://www.youtube.com/watch?v=aWoycQK9Msg",
    date: new Date(Date.now())
  },
  {
    title: "Easy DIY FLOATING SHELVES No bracket | DIY CREATORS",
    author: "DIY Creators",
    url: "https://www.youtube.com/watch?v=wki3wMAbtLg",
    date: new Date(Date.now())
  },
  {
    title: "How to make Canvas board for painting at home | DIY Handmade canvas board",
    author: "MC Crafts",
    url: "https://www.youtube.com/watch?v=EKu1Xf9qCog",
    date: new Date(Date.now())
    
  },
  {
    title: "Rolled Ice Cream DIY How to make rolled ice cream at home",
    author: "How to Cook That",
    url: "https://www.youtube.com/watch?v=aA6Z0x4rX30&t=341s",
    date: new Date(Date.now())
  },
  {
    title: "The Easiest Way To Make Ice Cream",
    author: "Joshua Weissman",
    url: "https://www.youtube.com/watch?v=7XV7whomojk",
    date: new Date(Date.now())
  },
  
  
];

db.Video
  .remove({})
  .then(() => db.Video.collection.insertMany(videoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
