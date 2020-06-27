const mongoose = require( "mongoose" );
const db = require( "../models" );

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/youTubeSearch"
);

const videoSeed = [
  {
    title: "Cabinet Build, Simple and Easy How to",
    thumbnailUrl: "https://i.ytimg.com/vi/tvIzj1SlXOU/mqdefault.jpg",
    description: "How to build a bath vanity using simple building techniques that anyone with basic tools can accomplish. I use the Kreg system to join the face frames. The basic ...",
    videoId: "tvIzj1SlXOU",
    videoUrl: "https://www.youtube.com/watch?v=tvIzj1SlXOU",
    date: new Date( Date.now() )
  },
  {
    title: "DIY Sideboard Cabinet (With Storage!)",
    thumbnailUrl: "https://i.ytimg.com/vi/4J6nMdlVBtc/mqdefault.jpg",
    description: "I've been working super hard over the past few weekends to create a #DIY Sideboard Cabinet for my parent's laundry room and I'm so excited to be sharing with ...",
    videoId: "4J6nMdlVBtc",
    videoUrl: "https://www.youtube.com/watch?v=4J6nMdlVBtc",
    date: new Date( Date.now() )
  },
  {
    title: "How to Make DIY Kitchen Cabinets",
    thumbnailUrl: "https://i.ytimg.com/vi/JjpetmltQGU/mqdefault.jpg",
    description: "DIY Kitchen Cabinet Tutorial - In this episode we'll walk through the basics of building a simple cabinet. We'll build a cabinet carcass, face frame, drawers, doors, ...",
    videoId: "JjpetmltQGU",
    videoUrl: "https://www.youtube.com/watch?v=JjpetmltQGU",
    date: new Date( Date.now() )
  },
  {
    title: "How to make Canvas board for painting at home | DIY Handmade canvas board",
    author: "MC Crafts",
    url: "https://www.youtube.com/watch?v=EKu1Xf9qCog",
    date: new Date( Date.now() )

  },
  {
    title: "DIY Wall Cabinets with 5 Storage Options | Shop Organization",
    thumbnailUrl: "https://i.ytimg.com/vi/i8jcNQ0FzWQ/mqdefault.jpg",
    description: "Get plans to build these cabinets: https://fixthisbuildthat.com/wallcabinets I partnered with Minwax to show how to build wall cabinets for your shop, garage or ...",
    videoId: "i8jcNQ0FzWQ",
    videoUrl: "https://www.youtube.com/watch?v=i8jcNQ0FzWQ",
    date: new Date( Date.now() )
  },
  {
    title: "Making a Tall Storage Cabinet",
    thumbnailUrl: "https://i.ytimg.com/vi/LxL0GjgHyHg/mqdefault.jpg",
    description: "Making a Tall Storage Cabinet SUBSCRIBE to my channel: https://www.youtube.com/c/mwawoodworks?sub_confirmation=1 Follow along as I add some much ...",
    videoId: "LxL0GjgHyHg",
    videoUrl: "https://www.youtube.com/watch?v=LxL0GjgHyHg",
    date: new Date( Date.now() )
  },




];

db.Video
  .remove( {} )
  .then( () => db.Video.collection.insertMany( videoSeed ) )
  .then( data =>
  {
    console.log( data.result.n + " records inserted!" );
    process.exit( 0 );
  } )
  .catch( err =>
  {
    console.error( err );
    process.exit( 1 );
  } );
