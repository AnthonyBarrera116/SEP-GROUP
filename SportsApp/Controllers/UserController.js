let dao = require("../Model/UserDao");
//const passUtil = require('../Util/PasswordUtil');
//let dao = require("./MockUserDao");

exports.setDao = function(otherDao)
{
    dao = otherDao;
}

exports.saveUser = async function(request, response)
{
    // creating a new User Object to be sent to the DAO
    // shares the exact same fields as a user in the DAO
    
    //console.log("i\'m running this from the controller!");
    //console.log( JSON.stringify(request.body) );
    
    // extract individual elements, hash password
    let username = request.body.username;
    let password = request.body.password;
    let teamID = request.body.teamID;
    
    //console.log( username );
    //console.log( password );
    //console.log( teamID );
    
    // building the user based on the info from the request
    let user = 
    {
        UserName:username,
        Password:password,
        UserType:0,
        TeamID:teamID,
        Likes:[]
    };
    
    // creating the user with the dao. if the user already exists, the dao returns 'null', else it returns the user
    let returnedUser = await dao.create( user );
    // if we get a user, send their information minus their password
    if (returnedUser !== null)
    {
        returnedUser.Password = null; // set the password to 'null' for security
        
        // send 200 status, indicating we connected
        response.status(200);
        
        // send user information back to the app
        response.send(returnedUser);
    }
    // if we get null, send back null
    else
    {
        response.status(500);
        response.send(null);
    }
}

exports.getUserInfo = async function(request, response)
{
    // get the username from the request body
    let username = request.body.username;
    
    // get the user information
    let userInfo = await dao.readByUsername(username);
    
    // if the user isn't null from the DAO
    if (userInfo !== null){
        // set password to 'null' before returning
        userInfo.Password = null;
        response.status(200);
        response.send(userInfo);
    }
    // user is not found
    else
    {
        // send 404 status and null
        response.status(404);
        response.send(null);
    }
}

/*
gets the user based on the username and password and saves them in the session
*/
exports.login = async function(request, response)
{
    // get the username and password from the request
    let username = request.body.username;
    let password = request.body.password;
    
    //console.log(username);
    //console.log(password);
    
    // get the user based on the username from the DAO
    let user = await dao.readByUsername(username);
    
    //console.log(user);
    
    // if the user isn't null and the passwords match, set status to 200 and return the user
    // don't return the password field, just the other information
    if(user !== null && user.Password === password)
    {
        response.status(200);
        
        // add the user to the session
        user.Password = null; // security
        request.session.user = user;
        
        // send the logged in user back to the app
        response.send(user);
    }
    // user isn't found or the passwords don't match
    else
    {
        response.send(null);
    }
    
}

/*
retrieves the user that is currently logged in to the session
*/
exports.loggedUser = function(request, response)
{
    response.status(200);
    response.send( request.session.user ); // send the logged in user
    response.end();
}

exports.updateUser = async function(request, response)
{
    // get all of the information that we need for the user
    let currUser = 
    {
        _id: request.body._id,
        UserName: request.body.UserName,
        Password: request.body.Password,
        TeamID: request.body.TeamID,
        UserType : request.body.UserType,
        Likes: request.body.Likes
    }
    
    let updatedUser = await dao.update(currUser);
    // update returns null if it fails, so we return null if it returns null
    if (updatedUser === null)
    {
        response.status(404);
        response.send(null);
    }
    else // update is successful
    {
        // send info without sending the password information
        let updatedUserInfo = 
        {
            _id: updatedUser._id,
            UserName: updatedUser.UserName,
            TeamID: updatedUser.TeamID,
            UserType: updatedUser.UserType,
            Likes: updatedUser.Likes
        }
        response.status(200);
        response.send(updatedUserInfo);
    }
}

exports.delUser = async function(request, response)
{
    let userID = request.body._id;
    let deletedUser = await dao.del(userID);
    if (deletedUser !== null)
    {
        response.status(200);
        response.send(deletedUser);
    }
    else
    {
        response.status(404);
        response.send(null);
    }
}