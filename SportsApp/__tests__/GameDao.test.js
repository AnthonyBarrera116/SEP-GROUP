const dbcon = require('../Model/DbConnection');
const dao = require('../Model/GameDao.js');
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
    let games = await dao.readAll();
    expect(games.length).toBe(0);
});
test('Create New game', async function()
{
    let games = await dao.readAll();
    let newgame = {};
    newgame.Home = "Phillies";
    newgame.Away = "Astros";
    newgame.HomeScore = 9001;
    newgame.AwayScore = 9002;
    newgame.Quarter = 9003;
    newgame.Time = 9003;
    newgame.Down = 9004;
    newgame.PlayByPlay = ["9005"];
    newgame.CommentIDs = ["1", "2", "3"];
    newgame.Likes = ["4", "5", "6"];
    newgame.DateTime = new Date('December 1, 2022 00:00:00');
    newgame = await dao.create(newgame);
    let newgames = await dao.readAll();
    expect(games.length + 1).toBe(newgames.length);
    expect(JSON.stringify(newgames[newgames.length - 1])).toBe(JSON.stringify(newgame));
});
test('Delete game', async function()
{
    let games = await dao.readAll();
    let newgame = {};
    newgame.Home = "Phillies";
    newgame.Away = "Astros";
    newgame.HomeScore = 9001;
    newgame.AwayScore = 9002;
    newgame.Quarter = 9003;
    newgame.Time = 9003;
    newgame.Down = 9004;
    newgame.PlayByPlay = ["9005"];
    newgame.CommentIDs = ["1", "2", "3"];
    newgame.Likes = ["4", "5", "6"];
    newgame.DateTime = new Date('December 1, 2022 00:00:00');
    newgame = await dao.create(newgame);
    await dao.del(newgame._id);
    let newgames = await dao.readAll();
    expect(games.length).toBe(newgames.length);
});

test('Delete All games', async function()
{
    let newgame = {};
    newgame.Home = "Phillies";
    newgame.Away = "Astros";
    newgame.HomeScore = 9001;
    newgame.AwayScore = 9002;
    newgame.Quarter = 9003;
    newgame.Time = 9003;
    newgame.Down = 9004;
    newgame.PlayByPlay = ["9005"];
    newgame.CommentIDs = ["1", "2", "3"];
    newgame.Likes = ["4", "5", "6"];
    newgame.DateTime = new Date('December 1, 2022 00:00:00');
    await dao.create(newgame);
    await dao.create(newgame);
    await dao.create(newgame);
    await dao.create(newgame);
    await dao.deleteAll();
    let newgames = await dao.readAll();
    expect(newgames.length).toBe(0);
});
test('Update game', async function()
{
    let newgame = {};
    newgame.Home = "Phillies";
    newgame.Away = "Astros";
    newgame.HomeScore = 9001;
    newgame.AwayScore = 9002;
    newgame.Quarter = 9003;
    newgame.Time = 9003;
    newgame.Down = 9004;
    newgame.PlayByPlay = ["9005"];
    newgame.CommentIDs = ["1", "2", "3"];
    newgame.Likes = ["4", "5", "6"];
    newgame.DateTime = new Date('December 1, 2022 00:00:00');
    newgame = await dao.create(newgame);
    let updatedgame = newgame;
    updatedgame.Home = "Astros";
    updatedgame.Away = "Phillies";
    updatedgame.HomeScore = 9002;
    updatedgame.AwayScore = 9003;
    updatedgame.Quarter = 9004;
    updatedgame.Time = 9005;
    updatedgame.Down = 9006;
    updatedgame.PlayByPlay = ["9007"];
    updatedgame.CommentIDs = ["2", "3", "4"];
    updatedgame.Likes = ["5", "6", "7"];
    updatedgame.DateTime = new Date('December 1, 2022 00:00:00');
    await dao.update(updatedgame);
    expect(JSON.stringify(updatedgame)).toBe(JSON.stringify(await dao.readByID(newgame._id)));
});

test('Read home games', async function()
{
    await dao.deleteAll();
    let newgame = {};
    newgame.Home = "Phillies";
    newgame.Away = "Astros";
    newgame.HomeScore = 9001;
    newgame.AwayScore = 9002;
    newgame.Quarter = 9003;
    newgame.Time = 9003;
    newgame.Down = 9004;
    newgame.PlayByPlay = ["9005"];
    newgame.CommentIDs = ["1", "2", "3"];
    newgame.Likes = ["4", "5", "6"];
    newgame.DateTime = new Date('December 1, 2022 00:00:00');
    let homeGames = [await dao.create(newgame)];
    newgame.DateTime = new Date('December 3, 2022 00:00:00');
    homeGames.push(await dao.create(newgame));
    newgame.DateTime = new Date('December 2, 2022 00:00:00');
    homeGames.push(await dao.create(newgame));
    newgame.Away = "Phillies";
    newgame.Home = "Astros";
    await dao.create(newgame);
    await dao.create(newgame);
    homeGames.sort((a, b) => parseFloat(a.DateTime) - parseFloat(b.DateTime));
    expect(JSON.stringify(homeGames)).toBe(JSON.stringify(await dao.readByHomeID("Phillies")));
});

test('Read away games', async function()
{
    await dao.deleteAll();
    let newgame = {};
    newgame.Home = "Phillies";
    newgame.Away = "Astros";
    newgame.HomeScore = 9001;
    newgame.AwayScore = 9002;
    newgame.Quarter = 9003;
    newgame.Time = 9003;
    newgame.Down = 9004;
    newgame.PlayByPlay = ["9005"];
    newgame.CommentIDs = ["1", "2", "3"];
    newgame.Likes = ["4", "5", "6"];
    newgame.DateTime = new Date('December 1, 2022 00:00:00');
    let awayGames = [await dao.create(newgame)];
    newgame.DateTime = new Date('December 3, 2022 00:00:00');
    awayGames.push(await dao.create(newgame));
    newgame.DateTime = new Date('December 2, 2022 00:00:00');
    awayGames.push(await dao.create(newgame));
    newgame.Away = "Phillies";
    newgame.Home = "Astros";
    await dao.create(newgame);
    await dao.create(newgame);
    awayGames.sort((a, b) => parseFloat(a.DateTime) - parseFloat(b.DateTime));
    expect(JSON.stringify(awayGames)).toBe(JSON.stringify(await dao.readByAwayID("Astros")));
});

test('Read entire schedule', async function()
{
    await dao.deleteAll();
    let newgame = {};
    newgame.Home = "Phillies";
    newgame.Away = "Astros";
    newgame.HomeScore = 9001;
    newgame.AwayScore = 9002;
    newgame.Quarter = 9003;
    newgame.Time = 9003;
    newgame.Down = 9004;
    newgame.PlayByPlay = ["9005"];
    newgame.CommentIDs = ["1", "2", "3"];
    newgame.Likes = ["4", "5", "6"];
    newgame.DateTime = new Date('December 1, 2022 00:00:00');
    let schedule = [await dao.create(newgame)];
    newgame.DateTime = new Date('December 3, 2022 00:00:00');
    schedule.push(await dao.create(newgame));
    newgame.DateTime = new Date('December 2, 2022 00:00:00');
    schedule.push(await dao.create(newgame));
    newgame.Away = "Phillies";
    newgame.Home = "Astros";
    newgame.DateTime = new Date('December 5, 2022 00:00:00');
    schedule.push(await dao.create(newgame));
    newgame.DateTime = new Date('December 6, 2022 00:00:00');
    schedule.push(await dao.create(newgame));
    schedule.sort((a, b) => parseFloat(a.DateTime) - parseFloat(b.DateTime));
    expect(JSON.stringify(schedule)).toBe(JSON.stringify(await dao.readSchedule("Astros")));
});