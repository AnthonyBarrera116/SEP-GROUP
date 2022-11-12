const teamController = require('../Controllers/TeamController');
const conIntercept = require('../Util/ControllerInterceptor');
const mockDao = require('../Util/MockTeamDao');


// set the DAO to the mock DAO
beforeAll(function()
{
    teamController.setDao(mockDao);
});

test('Creating a team that does not exist', async function()
{
    // setting up the request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set request data fields
    request.body.coach = "different coach";
    request.body.teamName = "different new team";
    
    // call the controller function
    await teamController.createTeam(request, response);
    
    // expecting status of 200 and response of a team JSON
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(
    {
        TeamName: "different new team",
        PlayerIDs: [],
        CoachID: "different coach"
    });
});

test('Creating a team that already exists', async function()
{
    // setting up the request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set request data fields
    request.body.coach = "coach";
    request.body.teamName = "existing team";
    
    // call the controller function
    await teamController.createTeam(request, response);
    
    // expecting status of 500 and response of null
    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.send).toHaveBeenCalledWith(null);
});



test('Getting an existing team', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.params.id = "abc";
    
    // call the controller function
    await teamController.getTeamInfo(request, response);
    
    // expecting status of 200 and response of a team JSON
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(
    {
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: "coach"
    });
});

test('Getting a non-existing team', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.params.id = "def";
    
    // call the controller function
    await teamController.getTeamInfo(request, response);
    
    // expecting status of 404 and response of null
    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.send).toHaveBeenCalledWith(null);
});

test('Getting all existing teams', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    await teamController.getTeams(request, response);
    
    // expects a JSON object that contains a list
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(
    {
    "teams":
        [
            {
                _id:"abc",
                TeamName: "existing team",
                PlayerIDs: ["testp1", "testp2"],
                CoachID: "coach"
            },
            {
                _id:"def",
                TeamName: "other existing team",
                PlayerIDs: ["testp3", "testp4"],
                CoachID: "other coach"
            },
            
        ]
    });
})



test('Adding a player to an existing team', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "abc";
    request.body.playerID = "testp3";
    
    // call the controller function
    await teamController.addPlayer(request, response);
    
    // expecting status 200 and response of a full team plus the new player
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(
    {
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2", "testp3"],
        CoachID: "coach"
    });
});

test('Adding a player to a non-existing team', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "def";
    request.body.playerID = "testp3";
    
    // call the controller function
    await teamController.addPlayer(request, response);
    
    // expecting status 200 and response of a full team plus the new player
    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.send).toHaveBeenCalledWith(null);
});



test('Removing a player from an existing team', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "abc";
    request.body.playerID = "testp2";
    
    // call the controller function
    await teamController.removePlayer(request, response);
    
    // expecting status of 200 and a team without 'testp2'
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(
    {
                _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1"],
        CoachID: "coach"
    });
});

test('Removing a player from an existing team that they do not play for', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "abc";
    request.body.playerID = "testp3";
    
    // call the controller function
    await teamController.removePlayer(request, response);
    
    // expecting status 200 and the team to be the exact same as in the DAO
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(
    {
                _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: "coach"
    });
});

test('Removing a player from a non-existing team', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "def";
    request.body.playerID = "testp2";
    
    // call the controller function
    await teamController.removePlayer(request, response);
    
    // expecting status 404 and null
    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.send).toHaveBeenCalledWith(null);
});



test('Removing a coach from an existing team', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "abc";
    
    // call the controller function
    await teamController.removeCoach(request, response);
    
    // expecting status 200 and the team to have CoachID as null
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(
    {
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: null
    });
});

test('Removing a coach from a non-existing team', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "def";
    
    // call the controller function
    await teamController.removeCoach(request, response);
    
    // expecting status 404 and sending null
    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.send).toHaveBeenCalledWith(null);
});



test('Changing an existing team\'s coach', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "abc";
    request.body.playerID = "new coach";
    
    // call the controller function
    await teamController.makeCoach(request, response);
    
    // expecting status 404 and sending null
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(
    {
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: "new coach"
    });
});

test('Changing a non-existing team\'s coach', async function()
{
    // set up request and response
    let request = conIntercept.mockRequest();
    let response = conIntercept.mockResponse();
    
    // set up request data
    request.body.teamID = "def";
    request.body.playerID = "new coach";
    
    // call the controller function
    await teamController.makeCoach(request, response);
    
    // expecting status 404 and sending null
    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.send).toHaveBeenCalledWith(null);
});

test('Updating an existing team', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.body.team = 
    {
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2", "testp3"],
        CoachID: "differentcoach"
    };
    
    await teamController.updateTeam(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2", "testp3"],
        CoachID: "differentcoach"
    });
});

test('Updating a non-existing team', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.body.team = 
    {
        _id:"def",
        TeamName: "non-existing team",
        PlayerIDs: ["fakep1", "fakep2", "fakep3"],
        CoachID: "fakecoach"
    };
    
    await teamController.updateTeam(req, res);
    
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});