// connecting to database
require('dotenv').config();
const dbcon = require('./Model/DbConnection');
dbcon.connect(); // add a '1' to connect to the test DB. remove otherwise

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan
const session = require('express-session');
const cors = require('cors');
const memorystore = require('memorystore')(session);
const userController = require('./Controllers/UserController'); // creating the user controller
const teamController = require('./Controllers/TeamController'); // creating the team controller

const app = express(); //creates a new Express Application

app.use( morgan('dev') );
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
app.use( cors() );

app.use( session(
{
    secret:'Groundwater - Simplistic - Virtual',
    cookie: {maxAge: 86400000 }, // = 1000*60*60*24 = 24Hours
    store: new memorystore({checkPeriod:86400000}),
    resave: false,
    saveUninitialized: true
}));

// setting up localhost
let hostname = "localhost";
let port = 4000;


//operations to interact with the database. functions defined in the controllers

// user operations
app.post('/user', userController.saveUser); // creating a new user
app.get('/user/:username', userController.getUserInfo); // getting user information from username
app.get('/user/:id', userController.getIDInfo); // getting user information from the ID
app.post('/dologin', userController.login); // logging in
app.get('/getlogged', userController.loggedUser); // get the user currently logged into the session
app.get('/logout', userController.logout); // log the user out of the session
app.post('/updateuser', userController.updateUser); // POST request to change the user's information

// team operations
app.post('/maketeam', teamController.createTeam); // create a new team
app.get('/getteam/:id', teamController.getTeamInfo); // get a specific team by their Database ID
app.get('/getallteams',teamController.getTeams); // get all teams in the DB


const server = app.listen(port, hostname, 
    function()
    {
        console.log(`Server running in ${hostname}:${port}`);
    }
);

//dbcon.disconnect();