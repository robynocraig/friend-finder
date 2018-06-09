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

    // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

    var newFriend = req.body;

    console.log(newFriend);

    friendsData.push(newFriend);

    res.json(newFriend);

    var q1diff = ((newFriend.q1) - (friendsData[0].q1))
    console.log(q1diff);
    // console.log(newFriend.q1);
    // console.log(friendsData[0].q1);
  });

};
