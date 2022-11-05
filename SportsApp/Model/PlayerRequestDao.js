const { Db } = require('mongodb');
const mongoose = require('mongoose');

const playerRequestSchema = new mongoose.Schema({//Request player to a team
 CoachID: String,//Coach requesting
 PlayerID: String,//Player being requested
 TeamID: String,//Team being requested to
 Reason: String,
 },
 { collection : 'Player Requests' });

 const playerRequestModel = mongoose.model('playerRequest', playerRequestSchema);

 exports.create = async function(playerRequest){
    const mongoplayerRequest = new playerRequestModel(playerRequest);
    await mongoplayerRequest.save();
    return await exports.read(mongoplayerRequest._id);
    //Used the read function because in tests it kept returning the _id in the beginning rather than end
 }
 
 exports.readAll = async function(){
    let playerRequests = await playerRequestModel.find({}).lean();
    return playerRequests;
 }
 
 exports.read = async function(id){
    let playerRequest = await playerRequestModel.findById(id).lean();
    return playerRequest;
}

exports.readByPlayerID = async function(PlayerID){//Assumes there will only be one user with the given name
    let request = await playerRequestModel.find({PlayerID: PlayerID}).lean();
    //console.log("Read by username: ")
    //console.log(JSON.stringify(user));
    return request;
}

exports.del = async function(id){
    let playerRequest = await playerRequestModel.findByIdAndDelete(id);
    return playerRequest;
}

exports.deleteAll = async function(){
    await playerRequestModel.deleteMany();
}

exports.update = async function(playerRequest)
{
    let id = { _id: playerRequest._id };
    let updates = { $set: {CoachID: playerRequest.CoachID, PlayerID: playerRequest.PlayerID, TeamID: playerRequest.TeamID, Reason: playerRequest.Reason}};
    await playerRequestModel.updateOne(id, updates);
    return await exports.read(playerRequest._id);
}