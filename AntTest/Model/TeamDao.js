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
    let potentialTeam = await teamModel.find({TeamName: team.TeamName}).lean();
    if(potentialTeam.length > 0)
    {
        console.log("Team \"" + team.TeamName + "\" already exists");
        console.log(JSON.stringify(potentialTeam));
        return null;
    }
    else
    {
        const mongoteam = new teamModel(team);
        await mongoteam.save();
        return await exports.read(mongoteam._id);
    }
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
    let potentialteam = await teamModel.find({TeamName: team.TeamName}).lean();
    if(potentialteam.length > 0 && (potentialteam[0]._id != team._id || potentialteam.length > 1))
    {                                                               //Makes sure someone doesn't change their teamname to someone else's        
        console.log("Team \"" + team.TeamName + "\" already exists while updating");      //Takes into account where team updates their name and doesn't change name
        //if(potentialteam.length > 1)                              //Assumes potentialteam will have at most one team, since names should only be used once
        //{
            //console.log("Multiple teams with the same teamname.  Contact the admin.");
        //}
        return null;
    }
    else
    {
        let id = { _id: team._id };
        let updates = { $set: {TeamName: team.TeamName, PlayerIDs: team.PlayerIDs, CoachID: team.CoachID}};
        await teamModel.updateOne(id, updates);
        return await exports.read(team._id);
    }
}