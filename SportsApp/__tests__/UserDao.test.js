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
    //console.log(JSON.stringify(users));
    //console.log(JSON.stringify(users));
    expect(users.length).toBe(0);
});
test('Create New User', async function()
{
    let users = await dao.readAll();
    let newUser = {};
    newUser.UserName = "Supposed to already exist";
    newUser.Email = "ldfalfjqwerqrlfj@sldfhaldfj.com";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    newUser = await dao.create(newUser);
    let newUsers = await dao.readAll();
    let newUser2 = await dao.create(newUser);
    expect(users.length + 1).toBe(newUsers.length);
    expect(JSON.stringify(newUsers[newUsers.length - 1])).toBe(JSON.stringify(newUser));
    expect(newUser2).toBe(null);
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
    await dao.create(newUser);
    newUser.UserName = "Erik";
    await dao.create(newUser);
    newUser.UserName = "Michael";
    await dao.create(newUser);
    newUser.UserName = "Joe";
    await dao.create(newUser);
    await dao.deleteAll();
    let newUsers = await dao.readAll();
    expect(newUsers.length).toBe(0);
});
test('Update User', async function()
{
    let newUser = {};
    newUser.UserName = "Anthony";
    newUser.Email = "ldfalfjasdlfj@sldfhald98579fj.com";
    newUser.Password = "password";
    newUser.UserType = 2;
    newUser.TeamID = "482a";
    newUser.Likes = ["This post", "That post"];
    newUser = await dao.create(newUser);
    let updatedUser = newUser;
    updatedUser.UserName = "Tony";
    updatedUser.Email = "qwierupqperu@sldfhaldfj.com";
    updatedUser.Password = "password1";
    updatedUser.UserType = 1;
    updatedUser.TeamID = "482b";
    updatedUser.Likes = ["This post", "That post", "Those posts"];
    await dao.update(updatedUser);
    await dao.readByUsername("Tony");
    expect(JSON.stringify(updatedUser)).toBe(JSON.stringify(await dao.readById(newUser._id)));
});