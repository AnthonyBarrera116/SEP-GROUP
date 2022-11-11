const dbcon = require('../Model/DbConnection');
const dao = require('../Model/RequestDao.js');
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
    let requests = await dao.readAll();
    expect(requests.length).toBe(0);
});
test('Create New request', async function()
{
    let requests = await dao.readAll();
    let newrequest = {};
    newrequest.RequesterID = "a";
    newrequest.SecondaryID = "b";
    newrequest.Reason = "c";
    newrequest.RequestType = 0;
    newrequest.Status = 0;
    newrequest = await dao.create(newrequest);
    let newrequests = await dao.readAll();
    expect(requests.length + 1).toBe(newrequests.length);
    expect(JSON.stringify(newrequests[newrequests.length - 1])).toBe(JSON.stringify(newrequest));
});
test('Delete request', async function()
{
    let requests = await dao.readAll();
    let newrequest = {};
    newrequest.RequesterID = "a";
    newrequest.SecondaryID = "b";
    newrequest.Reason = "c";
    newrequest.RequestType = 0;
    newrequest.Status = 0;
    newrequest = await dao.create(newrequest);
    await dao.del(newrequest._id);
    let newrequests = await dao.readAll();
    expect(requests.length).toBe(newrequests.length);
});

test('Delete All requests', async function()
{
    let newrequest = {};
    newrequest.RequesterID = "a";
    newrequest.SecondaryID = "b";
    newrequest.Reason = "c";
    newrequest.RequestType = 0;
    newrequest.Status = 0;
    await dao.create(newrequest);
    await dao.create(newrequest);
    await dao.create(newrequest);
    await dao.create(newrequest);
    await dao.deleteAll();
    let newrequests = await dao.readAll();
    expect(newrequests.length).toBe(0);
});
test('Update request', async function()
{
    let newrequest = {};
    newrequest.RequesterID = "a";
    newrequest.SecondaryID = "b";
    newrequest.Reason = "c";
    newrequest.RequestType = 0;
    newrequest.Status = 0;
    newrequest = await dao.create(newrequest);
    let updatedrequest = newrequest;
    updatedrequest.RequesterID = "x";
    updatedrequest.SecondaryID = "y";
    updatedrequest.Reason = "z";
    updatedrequest.RequestType = 1;
    updatedrequest.Status = 1;
    await dao.update(updatedrequest);
    expect(JSON.stringify(updatedrequest)).toBe(JSON.stringify(await dao.readById(newrequest._id)));
});

test('Read requests from one requester', async function()
{
    await dao.deleteAll();
    let newrequest = {};
    newrequest.RequesterID = "a";
    newrequest.SecondaryID = "b";
    newrequest.Reason = "c";
    newrequest.RequestType = 0;
    newrequest.Status = 0;
    let requests = [await dao.create(newrequest)];
    requests.push(await dao.create(newrequest));
    requests.push(await dao.create(newrequest));
    newrequest.RequesterID = "d";
    await dao.create(newrequest);
    await dao.create(newrequest);
    expect(JSON.stringify(requests)).toBe(JSON.stringify(await dao.readByRequesterID("a", 0)));
});

test('Read requests for one secondary ID', async function()
{
    await dao.deleteAll();
    let newrequest = {};
    newrequest.RequesterID = "a";
    newrequest.SecondaryID = "b";
    newrequest.Reason = "c";
    newrequest.RequestType = 0;
    newrequest.Status = 0;
    let requests = [await dao.create(newrequest)];
    requests.push(await dao.create(newrequest));
    requests.push(await dao.create(newrequest));
    newrequest.SecondaryID = "d";
    await dao.create(newrequest);
    await dao.create(newrequest);
    expect(JSON.stringify(requests)).toBe(JSON.stringify(await dao.readBySecondaryID("b", 0)));
});

test('Read requests of one type', async function()
{
    await dao.deleteAll();
    let newrequest = {};
    newrequest.RequesterID = "a";
    newrequest.SecondaryID = "b";
    newrequest.Reason = "c";
    newrequest.RequestType = 0;
    newrequest.Status = 0;
    let requests = [await dao.create(newrequest)];
    requests.push(await dao.create(newrequest));
    requests.push(await dao.create(newrequest));
    newrequest.RequestType = 1;
    await dao.create(newrequest);
    await dao.create(newrequest);
    expect(JSON.stringify(requests)).toBe(JSON.stringify(await dao.readByRequestType(0)));
});