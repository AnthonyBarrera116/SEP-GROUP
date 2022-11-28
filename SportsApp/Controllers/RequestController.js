/*
Important note about this file:
    to avoid confusion, as "request" is used for the Controller functions to describe HTTP requests, I will refer
    to requests within the context of the app's use (i.e., request sent from a player to a coach or admin) as "reqs"
*/
let dao = require("../Model/RequestDao");

// sets the DAO. used for testing
exports.setDao = function(otherDao)
{
    dao = otherDao;
}

/*
POST Request
creates a request sent from one user to another
responds with the request as it is sent to the DB if it goes through
*/
exports.createReq = async function(request, response)
{
    
    let newRequest = 
    {
        RequesterID: request.body.RequesterID, //User making the request
        SecondaryID: request.body.SecondaryID, //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: request.body.Reason,
        RequestType: request.body.RequestType, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    };
    
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
GET Request
function to get all reqs sent by players to join a team
assumes the request has:
    id - ID of the user who received the request
*/
exports.getReceivedReqs = async function(request, response)
{
    let id = request.params.id;
    
    // read from DAO
    let reqs = await dao.readBySecondaryID(id);
    
    // if it fails, respond with null and 404 error
    if(reqs === null)
    {
        response.status(404);
        response.send(null);
    }
    else // DAO return is not null
    {
        response.status(200);
        response.send(reqs);
    }
}

/*
GET Request
function to get reqs sent by a sender
assumes the request has:
    id - ID of the user who sent the request
*/
exports.getSentReqs = async function(request, response)
{
    let id = request.params.id;
    
    // read from DAO
    let reqs = await dao.readByRequesterID(id);
    
    // if it fails, respond with null and 404 error
    if(reqs === null)
    {
        response.status(404);
        response.send(null);
    }
    else // DAO return is not null
    {
        response.status(200);
        response.send(reqs);
    }
}

/*
POST Request
function to change the status of a req, either to accepted or rejected
assumes the body has:
    _id - ID of the request itself
    newStatus - whether the request is accepted or rejected
*/
exports.respondToReq = async function(request, response)
{
    let reqID = request.body._id;
    let newStatus = request.body.newStatus;
    
    let req = await dao.readById(reqID);
    
    if( req === null )
    {
        response.status(404);
        response.send(null);
    }
    else
    {
        req.Status = newStatus;
        
        let updatedReq = await dao.update(req);
        
        if(updatedReq === null)
        {
            response.status(500);
            response.send(null);
        }
        else
        {
            response.status(200);
            response.send(updatedReq);
        }
    }
}

/*
POST Request
function to update a req
assumes the body has:
    a JSON with all fields of a request
*/
exports.updateReq = async function(request, response)
{
    let fullReq = request.body.Req;
    
    let req = await dao.update(fullReq);
    
    if( req === null)
    {
        response.status(404);
        response.send(null);
    }
    else
    {
        response.status(200);
        response.send(req);
    }
}