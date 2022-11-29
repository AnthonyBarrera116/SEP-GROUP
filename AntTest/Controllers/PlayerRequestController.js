/*
this file is meant to handle requests from coaches sent to players for the player to join the 
team that the coach is the leader of
*/
let dao = require("../Model/PlayerRequestDao");

// sets the DAO. used for testing
exports.setDao = function(otherDao)
{
    dao = otherDao;
}

/*
creates a request sent from a coach to a player
assumes the request contains:
    coach ID
    player ID
    team ID
    reason for request
responds with the request as it is sent to the DB if it goes through
*/
exports.create = async function(request, response)
{
    let coachID = request.body.coachID;
    let playerID = request.body.playerID;
    let teamID = request.body.teamID;
    let reason = request.body.reason;
    
    let newRequest = 
    {
        CoachID: coachID,
        PlayerID: playerID,
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
function to get all requests for a given player
assumes request contains
    player ID
responds with all requests for the given player
*/
exports.getPlayerRequests = async function(request, response)
{
    // get the playerID from the request body
    let playerID = request.body.playerID;
    
    // send request to the DAO with all responses
    let allRequests = await dao.readByPlayerID(playerID);
    
    //if DAO response is not null, send back all responses even if they're empty
    if(allRequests !== null)
    {
        response.status(202);
        response.send(allRequests);
    }
    else
    {
        response.status(500);
        response.send(null);
    }
}

/*
function to delete a request for a player
assumes the request contains
    player request ID
responds with the deleted request upon success
*/
exports.deleteRequest = async function(request, response)
{
    // get the ID from the request
    let requestID = request.body.requestID;
    
    // delete the request from the DAO
    let deletedRequest = await dao.del(requestID);
    
    // status 200 means success and send back deleted request
    response.status(200);
    response.send(deletedRequest);
}

/*
function to edit/update a request
assumes the request contains
    a request (which will be called 'req' to avoid confusion)
responds with the updated request upon success
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