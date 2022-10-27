// if the user already exists, return null, else return the user
exports.create = async function(user)
{
    // creating a user object that already exists
    let existingUser = 
    {
        _id:0,
        UserName:"fred",
        Password:"fredsPW",
        UserType:0,
        TeamID:"unassigned",
        Likes:[]
    }
    
    // if the user already exists, return null. else, return the user passed to the function
    if(user.UserName === existingUser.UserName)
    {
        return null;
    }
    else
    {
        return user;
    }
}

exports.readByUsername = async function(username)
{
    // creating a user object that already exists
    let existingUser = 
    {
        _id:0,
        UserName:"fred",
        Password:"fredsPW",
        UserType:0,
        TeamID:"unassigned",
        Likes:[]
    }
    
    // if the username matches that of the existing user, return the user, else return null
    if(username === existingUser.UserName)
    {
        return existingUser;
    }
    else
    {
        return null;
    }
}