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

/*
function to remove a non-coach player from the team
trying to remove the coach will result in response being 'null' and nothing happening
assumes request contains
    player ID of player to be removed
    team ID of team to remove player from
responds with the full team information after player is removed
*/
exports.removePlayer = async function(request, response)
{
    let playerID = request.body.playerID;
    let teamID = request.body.teamID;
    
    // read team information from DAO
    let team = await dao.read(teamID);
    
    // if read succeeds
    if(team !== null)
    {
        // find and remove the player from the list of playerIDs
        let i = 0;
        let removeIndex = -1;
        while ( i < team.PlayerIDs.length )
        {
            // if we find the player to remove, we break out of the loop
            if( team.PlayerIDs[i] === playerID )
            {
                removeIndex = i;
                break;
            }
            i++;
        }
        // if removeIndex is set properly
        if( removeIndex >= 0 )
        {
            // splice the list, remove the player that the index is at. the '1' is saying how many elements to remove, which is just 1 in this case
            team.PlayerIDs.splice(removeIndex, 1);
        }  
        
        // update the DAO with the new list of playerIDs (with the player removed)
        let returnedTeam = await dao.update(team);
        
        // respond with new team information after the update
        if(returnedTeam !== null)
        {
            response.status(200);
            response.send(team);
        }
        else // if the returned team is 'null', respond with 'null'
        {
            response.status(500);
            response.send(null)
        }
    }
    else // if read fails, set status to 500 and return null
    {
        response.status(500);
        response.send(null);
    }
}

/*
function to remove a coach from a team
assumes request contains
    teamID
responds with team information after coach removal
NOTE - there is a function in the userController that updates coach statuses. that function must be called with this one on the frontend, as this file is not concered with individual user-side happenings
*/
exports.removeCoach = async function(request, response)
{
    // get the teamID from the body
    let teamID = request.body.teamID;
    
    // get the team information from the DAO
    let team = await dao.read(teamID);
    
    // if reading the team is successful
    if(team !== null)
    {
        // set the coach to 'null'
        team.CoachID = null;
        
        // send the update to the DAO
        let returnedTeam = await dao.update(team);
        
        // if the update succeeds, respond with updated team information. else, respond with null
        if(returnedTeam !== null)
        {
            response.status(200);
            response.send(returnedTeam);
        }
        else // if the update fails, respond with null
        {
            response.status(500);
            response.send(null);
        }
    }
    else // if reading the team fails, respond with null
    {
        response.status(404);
        response.send(null);
    }
}

/*
function to make a player a coach for a team
assumes request contains
    teamID
    playerID of player to be made a coach
responds with full team information after coach update
NOTE - there is a function in the userController that updates coach statuses. that function must be called with this one on the frontend, as this file is not concered with individual user-side happenings
*/
exports.makeCoach = async function()
{
    // get the teamID and playerID from the request body
    let teamID = request.body.teamID;
    let playerID = request.body.playerID;
    
    // get the team information from the DAO
    let team = await dao.read(teamID);
    
    if(team !== null) // reading the team succeeds, update the coachID
    {
        // update the Coach information
        team.CoachID = playerID;
        
        // send the update to the DAO
        let returnedTeam = await dao.update(team);
        
        // if the update succeeds, return updated team information
        if( returnedTeam !== null )
        {
            response.status(200);
            response.send(returnedTeam);
        }
        else // else return null
        {
            response.status(500);
            response.send(null);
        }
    }
    else // if reading the team fails, send 'null'
    {
        response.status(404);
        response.send(null);
    }
}