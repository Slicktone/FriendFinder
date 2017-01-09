// html-routes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.
var app = express();

// GET route that goes to the Survey Page
app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, 'survey.html'));
});

// Default USE route that leads to Home Page.
app.use(express.static(__dirname + '/home.html'));
