const existingRequests = 
[
    {
        _id: "123",
        RequesterID: "abc", //User making the request
        SecondaryID: "def", //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "some reason",
        RequestType: 2, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    },
    {
        _id: "456",
        RequesterID: "abc", //User making the request
        SecondaryID: "ghi", //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "some other reason",
        RequestType: 1, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    },
    {
        _id: "789",
        RequesterID: "ghi", //User making the request
        SecondaryID: "def", //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "some third reason",
        RequestType: 2, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    }
]

exports.create = async function(req)
{
    retReq = 
    {
        _id:"123",
        RequesterID: req.RequesterID,
        SecondaryID: req.SecondaryID,
        Reason: req.Reason ,
        RequestType: req.RequestType ,
        Status: req.Status
    }
    return retReq;
}

exports.readBySecondaryID = async function(id)
{
    reqs = []
    for(let i = 0; i < existingRequests.length; i++)
    {
        if(existingRequests[i].SecondaryID === id )
        {
            reqs.push( existingRequests[i] );
        }
    }
    if(reqs.length === 0)
    {
        return null;
    }
    else
    {
        return reqs;
    }
}

exports.readByRequesterID = async function(id)
{
    reqs = []
    for(let i = 0; i < existingRequests.length; i++)
    {
        if(existingRequests[i].RequesterID === id )
        {
            reqs.push( existingRequests[i] );
        }
    }
    if(reqs.length === 0)
    {
        return null;
    }
    else
    {
        return reqs;
    }
}

exports.readById = async function(id)
{
    for(let i = 0; i < existingRequests.length; i++)
    {
        if(existingRequests[i]._id === id )
        {
            return existingRequests[i];
        }
    }
    return null;
}

exports.update = async function(newReq)
{
    let cReq = 
    {
        _id: "789",
        RequesterID: "ghi", //User making the request
        SecondaryID: "def", //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "some third reason",
        RequestType: 2, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    }
    if(newReq._id === cReq._id)
    {
        cReq = newReq;
    }
    return cReq;
    
}