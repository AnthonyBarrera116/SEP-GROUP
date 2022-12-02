exports.create = async function(game)
{
    let newGame = game;
    newGame._id = "1"
    
    return newGame
}

exports.readAll = async function()
{
    return [
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
    ];
}

exports.readByID = async function(id)
{
    let existingGame =
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
    }
    if(id === existingGame._id)
    {
        return existingGame;
    }
    else
    {
        return null;
    }
}

exports.readSchedule = async function(teamID)
{
    let existingGames =
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
    ];
    
    if(teamID === "klm")
    {
        return existingGames;
    }
    else
    {
        return null;
    }
}