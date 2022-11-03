const dbcon = require('../Model/DbConnection');
const dao = require('../Model/PlayerRequestDao.js');
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
    let playerRequests = await dao.readAll();
    expect(playerRequests.length).toBe(0);
});
test('Create New playerRequest', async function()
{
    let playerRequests = await dao.readAll();
    let newplayerRequest = {};
    newplayerRequest.CoachID = "9001-";
    newplayerRequest.PlayerID = "-1000";
    newplayerRequest.TeamID = "-575";
    newplayerRequest.Reason = "8000";
    newplayerRequest = await dao.create(newplayerRequest);
    let newplayerRequests = await dao.readAll();
    expect(playerRequests.length + 1).toBe(newplayerRequests.length);
    expect(JSON.stringify(newplayerRequests[newplayerRequests.length - 1])).toBe(JSON.stringify(newplayerRequest));
});
test('Delete playerRequest', async function()
{
    let playerRequests = await dao.readAll();
    let newplayerRequest = {};
    newplayerRequest.CoachID = "9001-";
    newplayerRequest.PlayerID = "-1000";
    newplayerRequest.TeamID = "-575";
    newplayerRequest.Reason = "8000";
    newplayerRequest = await dao.create(newplayerRequest);
    await dao.del(newplayerRequest._id);
    let newplayerRequests = await dao.readAll();
    expect(playerRequests.length).toBe(newplayerRequests.length);
});

test('Delete All playerRequests', async function()
{
    let newplayerRequest = {};
    newplayerRequest.CoachID = "9001-";
    newplayerRequest.PlayerID = "-1000";
    newplayerRequest.TeamID = "-575";
    newplayerRequest.Reason = "8000";
    await dao.create(newplayerRequest);
    await dao.create(newplayerRequest);
    await dao.create(newplayerRequest);
    await dao.create(newplayerRequest);
    await dao.deleteAll();
    let newplayerRequests = await dao.readAll();
    expect(newplayerRequests.length).toBe(0);
});
test('Update playerRequest', async function()
{
    let newplayerRequest = {};
    newplayerRequest.CoachID = "9001-";
    newplayerRequest.PlayerID = "-1000";
    newplayerRequest.TeamID = "-575";
    newplayerRequest.Reason = "8000";
    newplayerRequest = await dao.create(newplayerRequest);
    let updatedplayerRequest = newplayerRequest;
    updatedplayerRequest.CoachID = "9002-";
    updatedplayerRequest.PlayerID = "-1001";
    updatedplayerRequest.TeamID = "-576";
    updatedplayerRequest.Reason = "9999";
    await dao.update(updatedplayerRequest);
    expect(JSON.stringify(updatedplayerRequest)).toBe(JSON.stringify(await dao.read(newplayerRequest._id)));
});