// The api-routes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friends = require('../data/friends.js');


// showing friends data in json
module.exports = function(app) {
    app.get("/api/friends", function(request, response) {
        response.json(friends);
    });

// post route for incoming survey results
    app.post("/api/friends", function(request, response) {
        var addedFriend = request.body;

        friends.push(addedFriend);
        response.json(addedFriend);
        
    });
}

