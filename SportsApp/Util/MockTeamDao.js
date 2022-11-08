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
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: "coach"
    };
    
    if(existingTeam.TeamName === teamName)
    {
        return existingTeam;
    }
    else
    {
        return null;
    }
}

exports.read = async function(teamID)
{
    let existingTeam = 
    {
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: "coach"
    };
    
    if(existingTeam._id === teamID)
    {
        return existingTeam;
    }
    else
    {
        return null;
    }
}

exports.readAll = async function(teamID)
{
    let existingTeams = 
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
        
    ];
    
    return existingTeams;
}

exports.update = async function(team)
{
    let existingTeam = 
    {
        _id:"abc",
        TeamName: "existing team",
        PlayerIDs: ["testp1", "testp2"],
        CoachID: "coach"
    };
    
    if(existingTeam._id === team._id)
    {
        existingTeam = team;
        return existingTeam;
    }
    else
    {
        return null;
    }
}