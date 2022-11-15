/*
this file is meant to handle requests from players to become the coach for a team
*/
let dao = require("../Model/CoachRequestDao");

// sets the DAO. used for testing
exports.setDao = function(otherDao)
{
    dao = otherDao;
}

/*
creates the request to the coach from the player
assumes the request has
    playerID
    teamID
    reason
responds with the request as it is sent to the DB if it goes through
*/
exports.create = async function(request, response)
{
    let playerID = request.body.playerID;
    let teamID = request.body.teamID;
    let reason = request.body.reason;
    
    let newRequest = 
    {
        RequesterID: playerID,
        TeamID: teamID,
        Reason: reason
    }
    
    // send request to be created in DAO
    let returnedRequest = await dao.create(newRequest);
    
    // if it fails, respond with null and 500 error
    if(returnedRequest === null)
    {
        response.status(500);
        response.send(null);
    }
    else // DAO return is not null, creation of request is successful
    {
        response.status(200);
        response.send(returnedRequest);
    }
}

/*
function to retrieve all requests
the user must be logged in to an admin account to receive the requests
*/
exports.getAllRequests = async function(request, response)
{
    // get the logged in user from the session
    let loggedUser = request.session.user;
    
    // if the user is an admin, pull requests
    if(loggedUser !== null && loggedUser.UserType === 2)
    {
        let allReqs = await dao.readAll();
        
        response.status(200);
        response.send(allReqs);
    }
    else // else send back 403 and null
    {
        response.status(403);
        response.send(null);
    }
}

/*
function to delete a request for a player
assumes the request contains
    player request ID
    session
responds with the deleted request upon success
will check the session for the logged-in user to see if they are an admin
*/
exports.deleteRequest = async function(request, response)
{
    // get the ID from the request
    let requestID = request.body.requestID;
    
    // delete the request from the DAO if the user is an admin
    if(request.session.user !== null && request.session.user.UserType == 2)
    {
        let deletedRequest = await dao.del(requestID);
        
        // status 200 means success and send back deleted request
        response.status(200);
        response.send(deletedRequest);
    }
    else // if the user is either not logged in or not an admin, respond with 403 and null
    {
        response.status(403);
        response.send(null);
    }
}

/*
function to edit/update a request
assumes the request contains
    a request (which will be called 'req' to avoid confusion)
responds with the updated request upon success
will check the session for the logged-in user to see if they are an admin
*/
exports.editRequest = async function(request, response)
{
    // get the new player req from the request
    let req = request.body.req;
    
    // send the updated request to the DAO to make changes in the DB
    let updatedReq = await dao.update(req);
    
    if(updatedReq !== null)
    {
        response.status(200);
        response.send(updatedReq);
    }
    else
    {
        response.status(500);
        response.send(null);
    }
}