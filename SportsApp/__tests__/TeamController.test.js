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
    
    // expecting status of 200 and response of a team JSON
    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.send).toHaveBeenCalledWith(null);
});