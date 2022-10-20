const dbcon = require('../model/DbConnection');
const dao = require('../model/UserDao.js');
beforeAll(function(){
    dbcon.connect(1);
});
afterAll(async function(){
    await dao.deleteAll();
    await dbcon.disconnect();
});
test('Read All', async function()
{
    let users = await dao.readAll();
    //console.log(JSON.stringify(users));
    expect(users.length).toBe(0);
});
test('Create New User', async function()
{
    let users = await dao.readAll();
    let newUser = {};
    newUser.UserName = "Nick";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    newUser = await dao.create(newUser);
    let newUsers = await dao.readAll();
    expect(users.length + 1).toBe(newUsers.length);
    expect(JSON.stringify(newUsers[newUsers.length - 1])).toBe(JSON.stringify(newUser));
});
test('Delete User', async function()
{
    let users = await dao.readAll();
    let newUser = {};
    newUser.UserName = "Nick";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    newUser = await dao.create(newUser);
    await dao.del(newUser._id);
    let newUsers = await dao.readAll();
    expect(users.length).toBe(newUsers.length);
});

test('Delete All Users', async function()
{
    let newUser = {};
    newUser.UserName = "Nick";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    await dao.create(newUser);
    await dao.create(newUser);
    await dao.create(newUser);
    await dao.create(newUser);
    await dao.deleteAll();
    let newUsers = await dao.readAll();
    expect(newUsers.length).toBe(0);
});
test('Update User', async function()
{
    let newUser = {};
    newUser.UserName = "Nick";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    newUser = await dao.create(newUser);
    let updatedUser = newUser;
    updatedUser.UserName = "Tony";
    await dao.update(updatedUser);
    expect(JSON.stringify(updatedUser)).toBe(JSON.stringify(await dao.read(newUser._id)));
});