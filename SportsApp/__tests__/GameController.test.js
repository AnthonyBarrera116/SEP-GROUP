const gameController = require('../Controllers/GameController');
const conIntercept = require('../Util/ControllerInterceptor');
const mockDao = require('../Util/MockGameDao');

// set the DAO to the mock DAO
beforeAll(function()
{
    gameController.setDao(mockDao);
});

test('Creating a game', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.body.HomeID = "abc";
    req.body.AwayID = "def";
    req.body.DateTime = 3;
    
    await gameController.createGame(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id:"1",
        Home: "abc",
        Away: "def",
        HomeScore: 0,
        AwayScore: 0,
        Quarter: 1,
        Time: 0,
        Down: 1,
        PlayByPlay: [],
        CommentIDs: [],
        Likes: [],
        DateTime: 3
    });
});

test('Reading all games', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    await gameController.getAllGames(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    [
        {
            _id: "1",
            Home: "abc",
            Away: "def",
            HomeScore: 0,
            AwayScore: 0,
            Quarter: 1,
            Time: 1,
            Down: 1,
            PlayByPlay: [],
            CommentIDs: [],
            Likes: [],
            DateTime: 1
        },
        {
            _id:"2",
            Home: "hij",
            Away: "klm",
            HomeScore: 0,
            AwayScore: 0,
            Quarter: 1,
            Time: 2,
            Down: 1,
            PlayByPlay: [],
            CommentIDs: [],
            Likes: [],
            DateTime: 2
        }
    ]);
});

test('Getting a specific game by its ID', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.params.id = "2";
    
    await gameController.getGame(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id:"2",
        Home: "hij",
        Away: "klm",
        HomeScore: 0,
        AwayScore: 0,
        Quarter: 1,
        Time: 2,
        Down: 1,
        PlayByPlay: [],
        CommentIDs: [],
        Likes: [],
        DateTime: 1
    });
});

test('Getting a game by an ID that doesn\'t exist', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.params.id = "1";
    
    await gameController.getGame(req, res);
    
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});

test('Getting the schedule for an existing team', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.params.id = "klm";
    
    await gameController.getTeamSchedule(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
        [
        {
            _id:"1",
            Home: "hij",
            Away: "klm",
            HomeScore: 0,
            AwayScore: 0,
            Quarter: 1,
            Time: 2,
            Down: 1,
            PlayByPlay: [],
            CommentIDs: [],
            Likes: [],
            DateTime: 1
        },
        {
            _id:"2",
            Home: "klm",
            Away: "nop",
            HomeScore: 0,
            AwayScore: 0,
            Quarter: 1,
            Time: 3,
            Down: 1,
            PlayByPlay: [],
            CommentIDs: [],
            Likes: [],
            DateTime: 2
        }
    ]);
});

test('Getting the schedule for a non-existent/unscheduled team', async function()
{
    let req = conIntercept.mockRequest();
    let res = conIntercept.mockResponse();
    
    req.params.id = "qrs";
    
    await gameController.getTeamSchedule(req, res);
    
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});