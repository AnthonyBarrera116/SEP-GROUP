const { Db } = require('mongodb');
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
 Home: String, //TeamID
 Away: String, //TeamID
 HomeScore: Number,
 AwayScore: Number,
 Quarter: Number,
 Time: Number, //In seconds
 Down: Number,
 PlayByPlay: [String],
 CommentIDs: [String],
 Likes: [String],
 DateTime: Number, //Seconds since January 1st 1970
 },
 { collection : 'Games' });

 const GameModel = mongoose.model('Game', GameSchema);

 exports.create = async function(Game){
    const mongoGame = new GameModel(Game);
    await mongoGame.save();
    return await exports.readByID(mongoGame._id);
    //Used the read function because in tests it kept returning the _id in the beginning rather than end
 }
 
 exports.readAll = async function(){
    let Games = await GameModel.find({}).lean();
    return Games;
 }
 
 exports.readByID = async function(id){
    let Game = await GameModel.findById(id).lean();
    return Game;
}

exports.readByHomeID = async function(id){
    let Game = await GameModel.find({Home: id}).lean();
    return Game;
}

exports.readByAwayID = async function(id){
    let Game = await GameModel.find({Away: id}).lean();
    return Game;
}

exports.del = async function(id){
    let Game = await GameModel.findByIdAndDelete(id);
    return Game;
}

exports.deleteAll = async function(){
    await GameModel.deleteMany();
}

exports.update = async function(Game)
{
    let id = { _id: Game._id };
    let updates = { $set: {Home: Game.Home, Away: Game.Away, HomeScore: Game.HomeScore, AwayScore: Game.AwayScore, Quarter: Game.Quarter, Time: Game.Time, Down: Game.Down, PlayByPlay: Game.PlayByPlay, CommentIDs: Game.CommentIDs, Likes: Game.Likes, DateTime: Game.DateTime}};
    await GameModel.updateOne(id, updates);
    return await exports.readByID(Game._id);
}