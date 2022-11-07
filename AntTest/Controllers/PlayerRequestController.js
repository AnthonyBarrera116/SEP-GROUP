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
exports.getRequests = async function(request, response)
{
    // get the playerID from the request body
    let playerID = request.body.playerID;
    
    // send request to the DAO with all responses
    // TODO - change this line if need be after PlayerRequest DAO is updated
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