const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan

const app = express(); //creates a new Express Application
const userController = require('./Controllers/UserController');

app.use( morgan('dev') );
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );

let hostname = "localhost";
let port = 8081;


//do read operation first on server-side
app.post('/user', userController.saveUser);
app.get('/user', function(request, response) {
    
    response.send({name:'orange robert'});
});


const server = app.listen(port, hostname, 
    function()
    {
        console.log(`Server running in ${hostname}:${port}`);
    }
);