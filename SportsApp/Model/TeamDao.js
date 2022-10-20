const { Db } = require('mongodb');
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
 TeamName: String,
 PlayerIDs: [String],
 CoachID: String,
 },
 { collection : 'Teams' });

 const teamModel = mongoose.model('team', teamSchema);

 exports.create = async function(team){
    const mongoteam = new teamModel(team);
    await mongoteam.save();
    return await exports.read(mongoteam._id);
    //Used the read function because in tests it kept returning the _id in the beginning rather than end
 }
 
 exports.readAll = async function(){
    let teams = await teamModel.find({}).lean();
    return teams;
 }
 
 exports.read = async function(id){
    let team = await teamModel.findById(id).lean();
    return team;
}

exports.del = async function(id){
    let team = await teamModel.findByIdAndDelete(id);
    return team;
}

exports.deleteAll = async function(){
    await teamModel.deleteMany();
}

exports.update = async function(team)
{
    let id = { _id: team._id };
    let updates = { $set: {TeamName: team.TeamName, PlayerIDs: team.PlayerIDs, CoachID: team.Coach}};
    await teamModel.updateOne(id, updates);
}