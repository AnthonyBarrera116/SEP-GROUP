let dao = require("../Model/UserDao");
//const passUtil = require('../Util/PasswordUtil');
//let dao = require("./MockUserDao");

exports.setDao = function(otherDao)
{
    dao = otherDao;
}

exports.saveUser = async function(request, response)
{
    // creating a new User Object to be sent to the DAO
    // shares the exact same fields as a user in the DAO
    
    // send 200 status, indicating we connected
    response.status(200);
    //console.log("i\'m running this from the controller!");
    //console.log( JSON.stringify(request.body) );
    
    // extract individual elements, hash password
    let username = request.body.username;
    let password = request.body.password;
    let teamID = request.body.teamID;
    
    //console.log( username );
    //console.log( password );
    //console.log( teamID );
    
    // building the user based on the info from the request
    let user = 
    {
        UserName:username,
        Password:password,
        UserType:0,
        TeamID:teamID,
        Likes:[]
    }
    
    // creating the user with the dao. if the user already exists, the dao returns 'null', else it returns the user
    let returnedUser = await dao.create( user );
    // if we get a user, send their information minus their password
    if (returnedUser !== null)
    {
        let retInfo = 
        {
            _id: returnedUser._id,
            UserName: returnedUser.UserName,
            UserType: returnedUser.UserType,
            TeamID: returnedUser.TeamID,
            Likes: returnedUser.Likes
        }
        // send user information back to the app
        response.send(retInfo);
    }
    // if we get null, send back null
    else
    {
        response.send(null);
    }
}

exports.getUserInfo = async function(request, response)
{
    // get the username from the request body
    let username = request.body.username;
    
    // get the user information
    let userInfo = await dao.readByUsername(username);
    
    // if the user isn't null from the DAO
    if (userInfo !== null){
        // return everything except for the password
        let retInfo = 
        {
            UserName: userInfo.UserName,
            TeamID: userInfo.TeamID,
            UserType: userInfo.UserType,
            Likes: userInfo.Likes
        };
        response.status(200);
        response.send(retInfo);
    }
    else
    {
        response.status(404);
        response.send(null);
    }
}

exports.login = async function(request, response)
{
    // get the username and password from the request
    let username = request.body.username;
    let password = request.body.password;
    
    //console.log(username);
    //console.log(password);
    
    // get the user based on the username from the DAO
    let user = await dao.readByUsername(username);
    
    //console.log(user);
    
    // if the user isn't null and the passwords match, set status to 200 and return the user
    // don't return the password field, just the other information
    if(user !== null && user.Password === password)
    {
        response.status(200);
        
        let retInfo = 
        {
            _id: user._id,
            UserName: user.UserName,
            TeamID: user.TeamID,
            UserType: user.UserType,
            Likes: user.Likes
        };
        
        response.send(retInfo);
    }
    // user isn't found or the passwords don't match
    else
    {
        response.status(404);
        response.send(null);
    }
    
}
