function totalDiff() {
  for (var i = 0; i < friendInput.length; i++) {
    var scoreDiff = parseInt(addedFriend.scores) - parseInt(friendInput.scores[i]);
    console.log(scoreDiff);
  }
}
totalDiff();


var friendInput = [{
  "name":"",
  "photo":"",
  "scores":[]
}];

var addedFriend = {
    "name":"",
  "photo":"",
  "scores":[]
}

module.exports = friendInput;