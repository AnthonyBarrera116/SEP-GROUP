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
    
    // extract individual elements, hash Password
    let username = request.body.UserName;
    let password = request.body.Password;
    let teamID = request.body.TeamID;
    
    //console.log( UserName );
    //console.log( Password );
    //console.log( TeamID );
    
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
    // if we get a user, send their information minus their Password
    if (returnedUser !== null)
    {
        returnedUser.Password = null; // set the Password to 'null' for security
        
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

/*
gets information from a user based on their username
accepts `username` as a parameter
*/
exports.getUserInfo = async function(request, response)
{
    // get the UserName from the request body
    let username = request.params.username;
    
    // get the user information
    let userInfo = await dao.readByUsername(username);
    
    // if the user isn't null from the DAO
    if (userInfo !== null){
        // set Password to 'null' before returning
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
gets a user from their database ID
accepts their ID as a parameter in the URI
*/
exports.getIDInfo = async function(request, response)
{
    // get the UserName from the request body
    let username = request.params.id;
    
    // get the user information
    let userInfo = await dao.readById(username);
    
    // if the user isn't null from the DAO
    if (userInfo !== null){
        // set Password to 'null' before returning
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
gets the user based on the UserName and Password and saves them in the session
*/
exports.login = async function(request, response)
{
    // get the UserName and Password from the request
    let username = request.body.UserName;
    let password = request.body.Password;
    
    //console.log(username);
    //console.log(password);
    
    // get the user based on the UserName from the DAO
    let user = await dao.readByUsername(username);
    
    //console.log(user);
    
    // if the user isn't null and the Passwords match, set status to 200 and return the user
    // don't return the Password field, just the other information
    if(user !== null && user.Password === password)
    {
        response.status(200);
        
        // add the user to the session
        user.Password = null; // security
        request.session.user = user;
        
        // send the logged in user back to the app
        response.send(user);
    }
    // user isn't found or the Passwords don't match
    else
    {
        response.status(404);
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
    //response.end();
}

/*
removes the user from the session
*/
exports.logout = function(request, response)
{
    request.session.user = null;
    response.status(200);
    response.send(null);
}

// TODO - make it so that a user can only update themselves if they're logged in or an Admin
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
    
    // if the ID of the user one wants to edit matches the one in the session or the user in the session is an admin, let them update the user
    if(request.session.user !== null && currUser._id === request.session.user._id || request.session.user.UserType === 2)
    {
        let updatedUser = await dao.update(currUser);
        // update returns null if it fails, so we return null if it returns null
        if (updatedUser === null)
        {
            response.status(404);
            response.send(null);
        }
        else // update is successful
        {
            // send info without sending the Password information
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
    // user is neither an admin or logged in, forbidden and respond with null
    else
    {
        response.status(403);
        response.send(null);
    }
}

exports.delUser = async function(request, response)
{
    let userID = request.body._id;
    
    // if the user is the logged user or an admin, let them delete
    if(request.session.user !== null && userID === request.session.user._id || request.session.user.UserType === 2)
    {
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
    // if user is neither logged in nor an admin, forbidden and send null
    else
    {
        response.status(403);
        response.send(null);
    }
}

/*
function to make a user into a coach
assumes this is called after a request to become a coach is fulfilled
assumes request has
    playerID
    TeamID
this function, on the frontend, should be called with an equivalent function in the teamController to do both things at once so that the team information is updated at the same time as the user information
*/
exports.makeCoach = async function(request, response)
{
    // get the information from the request body
    let playerID = request.body.PlayerID;
    let teamID = request.body.TeamID;
    
    // if the user is logged in as an admin, let the action take place
    if(request.session.user !== null && request.session.user.UserType === 2)
    {
        // retrieve user from the DAO
        let user = await dao.readById(playerID);
        
        // if the read succeeds, update the user. if not, respond with 'null'
        if (user !== null)
        {
            // change the userType to coach and change the team name
            user.UserType = 1;
            user.TeamID = teamID;
            
            // push update to the DAO
            let updatedUser = await dao.update(user);
            
            // if the update succeeds, return the updated user, else return null
            if( updatedUser !== null )
            {
                user.Password = null;
                response.status(200);
                response.send(updatedUser);
            }
            else // if the update fails, return 'null'
            {
                response.status(500);
                response.send(null);
            }
        }
        else // user couldn't be read from DAO, respond with null
        {
            response.status(404);
            response.send(null);
        }
    }
    else // user is not an admin, forbidden and send null
    {
        response.status(403);
        response.send(null);
    }
    
}

/*
function to remove coach status from a player who has it
assumes request body has
    playerID - of player (who is a coach) whose status must be reset
responds with player information after the update
*/
exports.removeCoach = async function(request, response)
{
    // retrieve ID from request body
    let playerID = request.body.PlayerID;
    // if the user is logged in as an admin, let the action take place
    if(request.session.user !== null && request.session.user.UserType === 2)
    {
        // retrieve player information from DAO
        let user = await dao.readById(playerID);
        
        // if the DAO read responds with a player, change their status to '0'
        if(user !== null)
        {
            // set their playerType to 0, so a normal player
            user.UserType = 0;
            
            // update the user in the DAO
            let updatedUser = await dao.update(user);
            
            // if the update succeeds, respond with the updated user
            if(updatedUser !== null)
            {
                updatedUser.Password = null;
                response.status(200);
                response.send(updatedUser);
            }
            else // else, respond with null
            {
                response.status(500);
                response.send(null);
            }
        }
        else // if reading the user fails, respond with 'null'
        {
            response.status(404);
            response.send(null);
        }
    }
    else // user is not an admin, forbidden and send null
    {
        response.status(403);
        response.send(null);
    }
}
