// connecting to database
require('dotenv').config();
const dbcon = require('./Model/DbConnection');
dbcon.connect(1); // add a '1' to connect to the test DB. remove otherwise

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan

const app = express(); //creates a new Express Application

const userController = require('./Controllers/UserController'); // creating the controller

app.use( morgan('dev') );
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );

// setting up localhost
let hostname = "localhost";
let port = 4000;


//operations to interact with the database. functions defined in the controller
app.post('/user', userController.saveUser);
app.get('/user', userController.login);

app.post('/user', userController.saveUser);
app.get('/user', userController.login);

const server = app.listen(port, hostname, 
    function()
    {
        console.log(`Server running in ${hostname}:${port}`);
    }
);

//dbcon.disconnect();