exports.create = async function(team)
{
    // create an existing team
    let existingTeam = 
    {
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: "coach"
    };
    
    if(team.TeamName === existingTeam.TeamName)
    {
        return null;
    }
    else
    {
        let newTeam = 
        {
            TeamName: team.TeamName,
            PlayerIDs: [],
            CoachID: team.CoachID
        }
        return newTeam;
    }
}

exports.readByName = async function(teamName)
{
    let existingTeam = 
    {
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: "coach"
    };
    
    if(team.TeamName === teamName)
    {
        return team;
    }
    else
    {
        return null;
    }
}