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
    };
    
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

exports.update = async function(user)
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
    
    // the only things that can't be changed are the username and id
    if(user.UserName === existingUser.UserName &&
        user._id === existingUser._id)
    {
        existingUser = user;
        return existingUser;
    }
    else
    {
        return null;
    }
}

exports.del = async function(id)
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
    
    // if the ID we're given matches the user's ID, delete them
    if(existingUser._id === id)
    {
        return existingUser;
    }
    else
    {
        return null;
    }
}