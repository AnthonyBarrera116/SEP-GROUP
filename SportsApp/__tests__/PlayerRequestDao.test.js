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

test('Read by PlayerID', async function()
{
    await dao.deleteAll();
    let newPlayerRequest = {};
    let newPlayerRequest2 = {};
    newPlayerRequest.CoachID = "9001-";
    newPlayerRequest.PlayerID = "-1000";
    newPlayerRequest.TeamID = "-575";
    newPlayerRequest.Reason = "8000";
    newPlayerRequest2.CoachID = "9001-";
    newPlayerRequest2.PlayerID = "-1000";
    newPlayerRequest2.TeamID = "-575";
    newPlayerRequest2.Reason = "8000";
    newPlayerRequest = await dao.create(newPlayerRequest);
    newPlayerRequest2 = await dao.create(newPlayerRequest2);
    let playerRequests = [newPlayerRequest, newPlayerRequest2];
    expect(JSON.stringify(playerRequests)).toBe(JSON.stringify(await dao.readByPlayerID(newPlayerRequest.PlayerID)));
});