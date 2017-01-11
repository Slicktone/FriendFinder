// html-routes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.
var path = require('path');

module.exports = function(app) {
// GET route that goes to the Survey Page
    app.get('/survey', function (request, response) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // Default USE route that leads to Home Page.
    app.use(function(request, response, next) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};
