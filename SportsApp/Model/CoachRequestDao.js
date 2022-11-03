const { Db } = require('mongodb');
const mongoose = require('mongoose');

const coachRequestSchema = new mongoose.Schema({//Player requests to be coach
 RequesterID: String,
 TeamID: String,
 Reason: String,
 },
 { collection : 'Coach Requests' });

 const coachRequestModel = mongoose.model('coachRequest', coachRequestSchema);

 exports.create = async function(coachRequest){
    const mongocoachRequest = new coachRequestModel(coachRequest);
    await mongocoachRequest.save();
    return await exports.read(mongocoachRequest._id);
    //Used the read function because in tests it kept returning the _id in the beginning rather than end
 }
 
 exports.readAll = async function(){
    let coachRequests = await coachRequestModel.find({}).lean();
    return coachRequests;
 }
 
 exports.read = async function(id){
    let coachRequest = await coachRequestModel.findById(id).lean();
    return coachRequest;
}

exports.del = async function(id){
    let coachRequest = await coachRequestModel.findByIdAndDelete(id);
    return coachRequest;
}

exports.deleteAll = async function(){
    await coachRequestModel.deleteMany();
}

exports.update = async function(coachRequest)
{
    let id = { _id: coachRequest._id };
    let updates = { $set: {RequesterID: coachRequest.RequesterID, TeamID: coachRequest.TeamID, Reason: coachRequest.Reason}};
    await coachRequestModel.updateOne(id, updates);
    return await exports.read(coachRequest._id);
}