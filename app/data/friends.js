// ===============================================================================
// DATA
// Below data will hold all of the entered friends data
// ===============================================================================

var friendsArray = [
  {
    name: "Ben",
    photo: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2018/03/14172852/gettyimages-592599097.jpg',
    scores: [
    1,
    2,
    3,
    4,
    5,
    5,
    4,
    3,
    2,
    1
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
