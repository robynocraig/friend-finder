// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // they are shown a JSON of the data in the table
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

  var newFriend = req.body;

  var userResponses = newFriend.scores;

  // Compute best friend match
  var matchName;
  var matchImage;
  var totalDifference = 100;

  // Examine all existing friends in the list
  for (var i = 0; i < friendsData.length; i++) {

    // Compute differenes for each question
    var diff = 0;
    for (var j = 0; j < userResponses.length; j++) {
      diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
    }

    // If lowest difference, record the friend match
    if (diff < totalDifference) {

      totalDifference = diff;
      matchName = friendsData[i].name;
      matchImage = friendsData[i].photo;
    }
  }

  // Add new user
  friendsData.push(newFriend);

  // Send appropriate response
  res.json({matchName: matchName, matchImage: matchImage});

  });

};
