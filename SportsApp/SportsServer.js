// connecting to database
require('dotenv').config();
const dbcon = require('./Model/DbConnection');
dbcon.connect(1); // add a '1' to connect to the test DB. remove otherwise

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan
const session = require('express-session');
const cors = require('cors');
const memorystore = require('memorystore')(session);
const userController = require('./Controllers/UserController'); // creating the controller

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


//operations to interact with the database. functions defined in the controller
app.post('/user', userController.saveUser);
app.get('/user', userController.login);


const server = app.listen(port, hostname, 
    function()
    {
        console.log(`Server running in ${hostname}:${port}`);
    }
);

//dbcon.disconnect();