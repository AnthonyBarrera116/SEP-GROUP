//const dao = require("../Model/UserDao")
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
    response.end();
    
    // return what the DAO creates
    //let createdUser = dao.create(newUser);
    //return createdUser;
}