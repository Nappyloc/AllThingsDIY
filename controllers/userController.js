const db = require("../models");
const bcrypt = require("bcrypt");
const cookie = require("cookie-parser");

const saltRounds = 10;

// Defining methods for the userController
module.exports = {
  // returns all users in the database
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // returns a user by the passed user id
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // updates a user with the matching user id
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // removes a user from the database with a matching id
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // creates a new user in the database
  createUser: function (req, res) {
    // console.log("First Step")
    db.User.findOne({ userName: req.body.userName })
    .then(function(user) {
      // console.log("couldnt find existing user")
      if (user) {
        // console.log(user.userName)
        res.status(500).send("createAlert");
        console.log("User already exists");
      } else {
        console.log("creating pw")
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
          db.User.create({
            userName: req.body.userName,
            password: hash
          }).then(function(data) {
            if (data) {
              console.log("TEST FOR HITTING userCreate api route worked!");
              // res.redirect("..");
              res.send("WORKS!")
            }
          });
        });
      };
    });
  },
  // Logs a user into the database
  userLogin: function (req, res) {
    db.User.findOne({ userName: req.body.userName })
    .then(function(user) {
      // console.log("User is = " + user.userName);
      if (!user) {
        console.log("Incorrect user");
        res.status(500).send("userAlert");
      } else {
        res.cookie("id", user.id, { expire: 360000 + Date.now() });
        // console.log("comparing passwords")
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          // console.log("body: " + req.body.password)
          // console.log("db: " + user.password)
          if (result === true) {
            // console.log("RESULT: " + result);
            console.log("Login is good!");
            res.json({});
          } else {
            res.status(500).send("passwordAlert");
            console.log("Incorrect Password!");
          }
        });
      }
    });
  }
};
