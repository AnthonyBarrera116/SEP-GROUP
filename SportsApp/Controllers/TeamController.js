let dao = require("../Model/TeamDao");

exports.setDao = function(otherDao)
{
    dao = otherDao;
}

/*
function to create a team
assumes at least a coach exists and that the array for players is empty
*/
exports.createTeam = async function(request, response)
{
    // get the coach and team name from the request
    // IMPORTANT - 'teamCoach' must be the _id value for the coach, NOT the username
    let teamCoach = request.body.coach;
    let teamName = request.body.teamName;
    
    // use the Team DAO to create a new team in the DB
    let newTeam =
    {
        TeamName: teamName,
        PlayerIDs: [],
        CoachID: teamCoach,
    };
    
    let returnedTeam = await dao.create(newTeam);
    
    //if we get back null, respond with null (indicating a team with the name already exists)
    if( returnedTeam === null)
    {
        response.status(500);
        response.send(null);
    }
    // else, we return the team information
    else
    {
        response.status(200);
        response.send( returnedTeam );
    }
}

/*
function to add a player to a team
assumes the request will contain the team ID and player ID
*/
exports.addPlayer = async function(request, response)
{
    // just the teamname. gets the rest of the team from the DAO
    let teamID = request.body.teamID;
    let playerToAdd = request.body.playerID;
    
    // can change DAO to read by team name and possibly make more streamlined,
    //    but that's a different matter
    let fullTeam = await dao.read(teamID);
    
    // if the team is found, add the new player
    if( fullTeam !== null)
    {
        // adds the new player to the ID
        fullTeam.PlayerIDs.push(playerToAdd);
        
        // uses the DAO to update with the new player
        let updatedTeam = await dao.update( fullTeam );
        
        // if the updatedTeam is not null, then respond with the updated team
        if(updatedTeam !== null)
        {
            response.status(200);
            response.send(updatedTeam);
        }
        else // if the update fails, respond with null
        {
            response.status(500);
            response.send(null);
        }
    }
    else // if the team to add to cannot be found, return null
    {
        response.status(500);
        response.send(null);
    }
}
