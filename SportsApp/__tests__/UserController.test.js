const userController = require('../Controllers/UserController');
const conIntercept = require('../Util/ControllerInterceptor');
const mockDao = require('../Util/MockUserDao');


// set the DAO to the mock DAO
beforeAll(function()
{
    userController.setDao(mockDao);
});

// logging in with existing user
test('Login With Existing User, Correct Credentials', async function()
{
    // setting up request for existing user
    let req = conIntercept.mockRequest();
    req.body.username = "fred";
    req.body.password = "fredsPW";
    // set up response
    let res = conIntercept.mockResponse();
    
    await userController.login(req, res);
    
    // expecting code 200 and a return of the original user, minus the password
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id: 0,
        UserName:"fred",
        Password: null,
        UserType:0,
        TeamID:"unassigned",
        Likes:[]
    });
});

// logging in with non-existent user
test('Login With Non-Existing User', async function()
{
    // setting up request for existing user
    let req = conIntercept.mockRequest();
    req.body.username = "marty";
    req.body.password = "martysPW";
    // set up response
    let res = conIntercept.mockResponse();
    
    await userController.login(req, res);
    
    // expecting code 404 and null
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});

// logging in with an existing user, but incorrect password
test('Existing User, Incorrect Password', async function()
{
    // setting up request for existing user
    let req = conIntercept.mockRequest();
    req.body.username = "fred";
    req.body.password = "notfredsPW";
    // set up response
    let res = conIntercept.mockResponse();
    
    await userController.login(req, res);
    
    // expecting code 404 and a return of null
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});

// creating a user that doesn't exist
test('Creating Non-Existing User', async function()
{
    // setting up request for existing user
    let req = conIntercept.mockRequest();
    req.body.username = "jacob";
    req.body.password = "jacobsPW";
    req.body.teamID = "unassigned";
    // set up response
    let res = conIntercept.mockResponse();
    
    await userController.saveUser(req, res);
    
    // expecting code 200 and a return of our created user, minus the password
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        UserName:"jacob",
        Password: null,
        UserType:0,
        TeamID:"unassigned",
        Likes:[]
    });
});

// creating a user that already exists
test('Creating Existing User', async function()
{
    // setting up request for existing user
    let req = conIntercept.mockRequest();
    req.body.username = "fred";
    req.body.password = "fredsPW";
    req.body.teamID = "unassigned";
    // set up response
    let res = conIntercept.mockResponse();
    
    await userController.saveUser(req, res);
    
    // expecting code 200 and a return of the original user
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(null);
});

// read info for an existing user
test('Read Information for an Existing User', async function()
{
    // setting up request for existing user
    let req = conIntercept.mockRequest();
    req.body.username = "fred";
    // set up response
    let res = conIntercept.mockResponse();
    
    await userController.getUserInfo(req, res);
    
    // expecting code 200 and sending the user, barring the ID and Password
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        UserName:"fred",
        Password: null,
        UserType:0,
        TeamID:"unassigned",
        Likes:[],
        _id:0
    });
});

// read info for a non-existing user
test('Read Information for a Non-Existing User', async function()
{
    // setting up request for existing user
    let req = conIntercept.mockRequest();
    req.body.username = "jake";
    // set up response
    let res = conIntercept.mockResponse();
    
    await userController.getUserInfo(req, res);
    
    // expecting code 404 and sending null
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});

// updating an existing user's information
test('Updating an Existing User', async function()
{
    // setting up request
    let req = conIntercept.mockRequest();
    req.body =
    {
        _id:0,
        UserName:"fred",
        Password:"fredsOtherPW",
        UserType:1,
        TeamID:"previouslyUnassigned",
        Likes:[]
    };
    // setting up response
    let res = conIntercept.mockResponse();
    
    await userController.updateUser(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id:0,
        UserName:"fred",
        UserType:1,
        TeamID:"previouslyUnassigned",
        Likes:[]
    });
});

// trying to update a non-existent user
test('Updating a Non-Existing User', async function()
{
    let req = conIntercept.mockRequest();
    req.body =
    {
        _id:0,
        UserName:"jacob",
        Password:"jacobsPW",
        UserType:0,
        TeamID:"unassigned",
        Likes:[]
    };
    // setting up response
    let res = conIntercept.mockResponse();
    
    await userController.updateUser(req, res);
    
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});

// deleting a user with the correct ID
test('Deleting an Existing User', async function()
{
    let req = conIntercept.mockRequest();
    req.body._id = 0;
    // setting up response
    let res = conIntercept.mockResponse();
    
    await userController.delUser(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
    {
        _id:0,
        UserName:"fred",
        Password:"fredsPW",
        UserType:0,
        TeamID:"unassigned",
        Likes:[]
    });
});

// deleting a user with a non-existent ID
test('Deleting Using an Invalid ID', async function()
{
    let req = conIntercept.mockRequest();
    req.body._id = 30;
    // setting up response
    let res = conIntercept.mockResponse();
    
    await userController.delUser(req, res);
    
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(null);
});