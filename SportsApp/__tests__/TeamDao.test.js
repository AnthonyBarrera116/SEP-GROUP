const dbcon = require('../model/DbConnection');
const dao = require('../model/TeamDao.js');
beforeAll(function(){
    dbcon.connect(1);
});
afterAll(async function(){
    await dao.deleteAll();
    await dbcon.disconnect();
});
test('Read All', async function()
{
    let teams = await dao.readAll();
    //console.log(JSON.stringify(teams));
    expect(teams.length).toBe(0);
});
test('Create New team', async function()
{
    let teams = await dao.readAll();
    let newteam = {};
    newteam.TeamName = "The Programmers";
    newteam.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam.CoachID = "482a";
    newteam = await dao.create(newteam);
    let newteam2 = {};
    newteam2.TeamName = "The Programmers";
    newteam2.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam2.CoachID = "482a";
    newteam2 = await dao.create(newteam2);
    expect(newteam2).toBe(null);
    let newteams = await dao.readAll();
    expect(teams.length + 1).toBe(newteams.length);
    expect(JSON.stringify(newteams[newteams.length - 1])).toBe(JSON.stringify(newteam));
});
test('Delete team', async function()
{
    let teams = await dao.readAll();
    let newteam = {};
    newteam.TeamName = "The Programmers";
    newteam.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam.CoachID = "482a";
    newteam = await dao.create(newteam);
    await dao.del(newteam._id);
    let newteams = await dao.readAll();
    expect(teams.length).toBe(newteams.length);
});

test('Delete All teams', async function()
{
    let newteam = {};
    newteam.TeamName = "The Programmers";
    newteam.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam.CoachID = "482a";
    await dao.create(newteam);
    await dao.create(newteam);
    await dao.create(newteam);
    await dao.create(newteam);
    await dao.deleteAll();
    let newteams = await dao.readAll();
    expect(newteams.length).toBe(0);
});
test('Update team', async function()
{
    let newteam = {};
    newteam.TeamName = "The Programmers";
    newteam.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam.CoachID = "482a";
    newteam = await dao.create(newteam);
    let updatedteam = newteam;
    updatedteam.TeamName = "The Students";
    await dao.update(updatedteam);
    expect(JSON.stringify(updatedteam)).toBe(JSON.stringify(await dao.read(newteam._id)));
});