const dbcon = require('../Model/DbConnection');
const dao = require('../Model/CoachRequestDao.js');
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
    let CoachRequests = await dao.readAll();
    expect(CoachRequests.length).toBe(0);
});
test('Create New CoachRequest', async function()
{
    let CoachRequests = await dao.readAll();
    let newCoachRequest = {};
    newCoachRequest.RequesterID = "8675-";
    newCoachRequest.TeamID = "-309";
    newCoachRequest.Reason = "Number";
    newCoachRequest = await dao.create(newCoachRequest);
    let newCoachRequests = await dao.readAll();
    expect(CoachRequests.length + 1).toBe(newCoachRequests.length);
    expect(JSON.stringify(newCoachRequests[newCoachRequests.length - 1])).toBe(JSON.stringify(newCoachRequest));
});
test('Delete CoachRequest', async function()
{
    let CoachRequests = await dao.readAll();
    let newCoachRequest = {};
    newCoachRequest.RequesterID = "8675-";
    newCoachRequest.TeamID = "-309";
    newCoachRequest.Reason = "Number";
    newCoachRequest = await dao.create(newCoachRequest);
    await dao.del(newCoachRequest._id);
    let newCoachRequests = await dao.readAll();
    expect(CoachRequests.length).toBe(newCoachRequests.length);
});

test('Delete All CoachRequests', async function()
{
    let newCoachRequest = {};
    newCoachRequest.RequesterID = "8675-";
    newCoachRequest.TeamID = "-309";
    newCoachRequest.Reason = "Number";
    await dao.create(newCoachRequest);
    await dao.create(newCoachRequest);
    await dao.create(newCoachRequest);
    await dao.create(newCoachRequest);
    await dao.deleteAll();
    let newCoachRequests = await dao.readAll();
    expect(newCoachRequests.length).toBe(0);
});
test('Update CoachRequest', async function()
{
    let newCoachRequest = {};
    newCoachRequest.RequesterID = "8675-";
    newCoachRequest.TeamID = "-309";
    newCoachRequest.Reason = "Number";
    newCoachRequest = await dao.create(newCoachRequest);
    let updatedCoachRequest = newCoachRequest;
    updatedCoachRequest.Reason = "Jenny";
    await dao.update(updatedCoachRequest);
    expect(JSON.stringify(updatedCoachRequest)).toBe(JSON.stringify(await dao.read(newCoachRequest._id)));
});