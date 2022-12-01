const reqController = require('../Controllers/RequestController');
const conIntercept = require('../Util/ControllerInterceptor');
const mockDao = require('../Util/MockReqDao');

// set the DAO to the mock DAO
beforeAll(function()
{
    reqController.setDao(mockDao);
});

/*
        RequesterID: request.body.RequesterID, //User making the request
        SecondaryID: request.body.SecondaryID, //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: request.body.Reason,
        RequestType: request.body.RequestType, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
*/
test('Creating a Request', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.body.RequesterID = "john";
    req.body.SecondaryID = "jacob";
    req.body.Reason = "something";
    req.body.RequestType = 0;
    
    await reqController.createReq(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id:"123",
        RequesterID: "john",
        SecondaryID: "jacob",
        Reason: "something" ,
        RequestType: 0,
        Status: 0
    });
});

test('Getting requests as a receiver', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.params.id = "def";
    
    await reqController.getReceivedReqs(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
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
        _id: "789",
        RequesterID: "ghi", //User making the request
        SecondaryID: "def", //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "some third reason",
        RequestType: 2, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    }
    ]);
});

test('Getting requests when you have received none or with an invalid ID', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.params.id = "defghijkl";
    
    await reqController.getReceivedReqs(req, res);
    
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});

test('Getting requests as a sender', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.params.id = "abc";
    
    await reqController.getSentReqs(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
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
    }
    ]);
});

test('Getting requests when you have sent none or with an invalid ID', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.params.id = "abcdef";
    
    await reqController.getSentReqs(req, res);
    
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});

test('Responding to a request', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.body._id = "789";
    req.body.newStatus = 1;
    
    await reqController.respondToReq(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id: "789",
        RequesterID: "ghi", //User making the request
        SecondaryID: "def", //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "some third reason",
        RequestType: 2, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 1, //0-Pending, 1-Accepted, 2-Rejected
    });
});

test('Updating a request', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.body.Req = 
    {
        _id: "789",
        RequesterID: "ghi", //User making the request
        SecondaryID: "def", //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "oil change",
        RequestType: 2, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    }
    
    await reqController.updateReq(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id: "789",
        RequesterID: "ghi", //User making the request
        SecondaryID: "def", //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "oil change",
        RequestType: 2, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    });
});