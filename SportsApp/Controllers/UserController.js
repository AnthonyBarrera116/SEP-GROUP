const dao = require("../Model/UserDao")
const passUtil = require('../Util/PasswordUtil');

exports.saveUser = function(request, response)
{
    // creating a new User Object to be sent to the DAO
    // shares the exact same fields as a user in the DAO
    /*let newUser = {
        UserName:user.username,
        Password:user.password,
        UserType:0,
        TeamID:user.teamID,
        Likes:[]}*/
    // log messages for testing
    
    response.status(200);
    console.log("i\'m running this from the controller!");
    console.log( JSON.stringify(request.body) );
    
    // extract individual elements, hash password
    let username = request.body.username;
    let password = request.body.password;
    let teamID = request.body.teamID;
    
    console.log( username );
    console.log( password );
    console.log( teamID );
    
    let user = 
    {
        UserName:username,
        Password:password,
        UserType:0,
        TeamID:teamID,
        Likes:[]
    }
    
    let returnedUser = dao.create( user );
    
    response.send( returnedUser );
    // return what the DAO creates
    //let createdUser = dao.create(newUser);
    //return createdUser;
}