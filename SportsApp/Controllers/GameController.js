let dao = require("../Model/TeamDao");

exports.setDao = function(otherDao)
{
    dao = otherDao;
}

/*
function to create a game. POST Request in the server.

required fields for a game in the DAO are:
 Home: String, //TeamID
 Away: String, //TeamID
 HomeScore: Number,
 AwayScore: Number,
 Quarter: Number,
 Time: Number, //In seconds
 Down: Number,
 PlayByPlay: [String],
 CommentIDs: [String],
 Likes: [String],
 DateTime: Number,

assumes the request has:
    HomeID - ID of the Home Team
    AwayID - ID of the Away Team
    DateTime - Time that the game begins (seconds since January 1st 1970)
*/
exports.createGame = async function(request, response)
{
    // get information from the Request
    let homeID = request.body.HomeID;
    let awayID = request.body.AwayID;
    let dt = request.body.DateTime;
    
    // create a new Game Object and send it to the DB
    let newGame = 
    {
        Home: homeID,
        Away: awayID,
        HomeScore: 0,
        AwayScore: 0,
        Quarter: 1,
        Time: 0,
        Down: 1,
        PlayByPlay: [],
        CommentIDs: [],
        Likes: [],
        DateTime:  dt
    };
    
    let returnedGame = await dao.create(newGame);
    
    if (returnedGame === null)
    {
        response.status(500);
        response.send(null);
    }
    else
    {
        response.status(200);
        response.send(returnedGame);
    }

}

/*
function to retrieve data for all games
GET request with no parameters
*/
exports.getAllGames = async function(request, response)
{
    let games = await dao.readAll();
    
    if (games === null)
    {
        response.status(404);
        response.send(null);
    }
    else
    {
        response.status(200);
        response.send(games);
    }
}

/*
function to retrieve a game by the game's Database ID
GET request with the ID as a parameter
*/
exports.getGame = async function(request, response)
{
    let gameID = request.params.id;
    
    let returnedGame = await dao.readByID(gameID);
    
    if (returnedGame === null)
    {
        response.status(404);
        response.send(null);
    }
    else
    {
        response.status(200);
        response.send(returnedGame);
    }
}

/*
function to retrieve all games for a particular team in chronological order (thanks, Nick!)
GET request with the Team ID as a parameter
*/
exports.getTeamSchedule = async function(request, response)
{
    let teamID = request.params.id;
    
    let returnedSchedule = await dao.readSchedule(teamID);
    
    if (returnedSchedule === null)
    {
        response.status(404);
        response.send(null);
    }
    else
    {
        response.status(200);
        response.send(returnedSchedule);
    }
}