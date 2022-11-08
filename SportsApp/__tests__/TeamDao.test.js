const dbcon = require('../Model/DbConnection');
const dao = require('../Model/TeamDao.js');
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
    let teams = await dao.readAll();
    //console.log(JSON.stringify(teams));
    expect(teams.length).toBe(0);
});
test('Create New team', async function()
{
    let teams = await dao.readAll();
    let newteam = {};
    newteam.TeamName = "Supposed to already exist";
    newteam.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam.CoachID = "482a";
    newteam.Wins = 2;
    newteam.Losses = 1;
    newteam = await dao.create(newteam);
    let newteam2 = await dao.create(newteam);
    expect(newteam2).toBe(null);
    let newteams = await dao.readAll();
    expect(teams.length + 1).toBe(newteams.length);
    expect(JSON.stringify(newteams[newteams.length - 1])).toBe(JSON.stringify(newteam));
});
test('Delete team', async function()
{
    let teams = await dao.readAll();
    let newteam = {};
    newteam.TeamName = "The Developers";
    newteam.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam.CoachID = "482a";
    newteam.Wins = 2;
    newteam.Losses = 1;
    newteam = await dao.create(newteam);
    await dao.del(newteam._id);
    let newteams = await dao.readAll();
    expect(teams.length).toBe(newteams.length);
});

test('Delete All teams', async function()
{
    let newteam = {};
    newteam.TeamName = "The Code Monkeys";
    newteam.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam.CoachID = "482a";
    newteam.Wins = 2;
    newteam.Losses = 1;
    await dao.create(newteam);
    newteam.TeamName = "The Code Baboons";
    await dao.create(newteam);
    newteam.TeamName = "The Code Apes";
    await dao.create(newteam);
    newteam.TeamName = "The Code Gorillas";
    await dao.create(newteam);
    await dao.deleteAll();
    let newteams = await dao.readAll();
    expect(newteams.length).toBe(0);
});
test('Update team', async function()
{
    let newteam = {};
    newteam.TeamName = "The Students";
    newteam.PlayerIDs = ["Nick", "Erik", "Anthony", "Michael", "Joe"];
    newteam.CoachID = "482a";
    newteam.Wins = 2;
    newteam.Losses = 1;
    newteam = await dao.create(newteam);
    let updatedteam = newteam;
    updatedteam.TeamName = "The Updated Team";
    updatedteam.PlayerIDs = ["No one"];
    updatedteam.CoachID = "482b";
    updatedteam.Wins = 3;
    updatedteam.Losses = 2;
    await dao.update(updatedteam);
    expect(JSON.stringify(updatedteam)).toBe(JSON.stringify(await dao.read(newteam._id)));
});