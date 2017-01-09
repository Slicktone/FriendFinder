var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var surveyInput = [{

}];

// Server Routes will be found on api-routes.js

// Starting the Server
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});
