const dbcon = require('../Model/DbConnection');
const dao = require('../Model/UserDao.js');
beforeAll(async function(){
    await dbcon.connect(1);
});
afterAll(async function(){
    await dao.deleteAll();
    await dbcon.disconnect();
});
test('Read All', async function()
{
    await dao.deleteAll();
    let users = await dao.readAll();
    expect(users.length).toBe(0);
});
test('Create New User', async function()
{
    let users = await dao.readAll();
    let newUser = {};
    newUser.UserName = "Supposed to already exist";
    newUser.Email = "Supposed to already be used";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    let createdUser = await dao.create(newUser);
    let newUsers = await dao.readAll();
    let createdUser2 = await dao.create(newUser);
    newUser.UserName = "Nick";
    let createdUser3 = await dao.create(newUser);
    expect(users.length + 1).toBe(newUsers.length);
    expect(JSON.stringify(newUsers[newUsers.length - 1])).toBe(JSON.stringify(createdUser));
    expect(createdUser2).toBe(null);
    expect(createdUser3).toBe(null);
});
test('Delete User', async function()
{
    let users = await dao.readAll();
    let newUser = {};
    newUser.UserName = "Erik";
    newUser.Email = "ldfalfjasdlfj@soiupupaldfj.com";
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
    newUser.Email = "ldfalfjvcnmxcvasdlfj@sldfhaldfj.com";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    await dao.create(newUser);
    newUser.UserName = "Tony";
    newUser.Email = "t@cs.com";
    await dao.create(newUser);
    newUser.UserName = "Erik";
    newUser.Email = "e@cs.com";
    await dao.create(newUser);
    newUser.UserName = "Michael";
    newUser.Email = "m@cs.com";
    await dao.create(newUser);
    newUser.UserName = "Joe";
    newUser.Email = "j@cs.com";
    await dao.create(newUser);
    await dao.deleteAll();
    let newUsers = await dao.readAll();
    expect(newUsers.length).toBe(0);
});
test('Update User', async function()
{
    let newUser = {};
    newUser.UserName = "N";
    newUser.Email = "qwierupqperu@sldfhaldfj.com";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    let createdUser = await dao.create(newUser);
    createdUser.UserName = "Supposed to already exist 2";
    createdUser.Email = "Supposed to already be used 2";
    createdUser.Password = "password1";
    createdUser.UserType = 1;
    createdUser.TeamID = "482b";
    createdUser.Likes = ["This post", "That post", "Those posts"];
    await dao.update(createdUser);
    expect(JSON.stringify(createdUser)).toBe(JSON.stringify(await dao.readById(createdUser._id)));
    let createdUser2 = await dao.create(newUser);
    createdUser2.Email = "Supposed to already be used 2";
    expect(await dao.update(createdUser2)).toBe(null);
    createdUser2.UserName = "Supposed to already exist 2";
    expect(await dao.update(createdUser2)).toBe(null);
});

test('Read by TeamID', async function()
{
    await dao.deleteAll();
    let newUser = {};
    let newUser2 = {};
    newUser.UserName = "N";
    newUser.Email = "qwierupqperu@sldfhaldfj.com";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    newUser2.UserName = "M";
    newUser2.Email = "p";
    newUser2.Password = "password";
    newUser2.UserType = 2;
    newUser2.TeamID = "482a";
    newUser2.Likes = ["This post", "That post"];
    newUser = await dao.create(newUser);
    newUser2 = await dao.create(newUser2);
    let users = [newUser, newUser2];
    expect(JSON.stringify(users)).toBe(JSON.stringify(await dao.readByTeamID(newUser.TeamID)));
});

test('Read by UserName', async function()
{
    await dao.deleteAll();
    let newUser = {};
    newUser.UserName = "N";
    newUser.Email = "qwierupqperu@sldfhaldfj.com";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    let createdUser = await dao.create(newUser);
    expect(JSON.stringify(createdUser)).toBe(JSON.stringify(await dao.readByUsername(createdUser.UserName)));
});