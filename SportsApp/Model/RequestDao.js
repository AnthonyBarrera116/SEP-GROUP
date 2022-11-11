const { Db } = require('mongodb');
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({//Player requests to be coach
 RequesterID: String, //User making the request
 SecondaryID: String, //Requestee; could be playerID, coachID, or teamID depending on how you use it
 Reason: String,
 RequestType: Number, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
 Status: Number, //0-Pending, 1-Accepted, 2-Rejected
 },
 { collection : 'Requests' });

 const requestModel = mongoose.model('request', requestSchema);

 exports.create = async function(request){
    const mongorequest = new requestModel(request);
    await mongorequest.save();
    return await exports.readById(mongorequest._id);
    //Used the read function because in tests it kept returning the _id in the beginning rather than end
 }
 
 exports.readAll = async function(){
    let requests = await requestModel.find({}).lean();
    return requests;
 }
 
 exports.readById = async function(id){
    let request = await requestModel.findById(id).lean();
    return request;
}

exports.readByRequesterID = async function(id){
    let requests = await requestModel.find({RequesterID: id}).lean();
    return requests;
}

exports.readBySecondaryID = async function(id, requestType){ //Specify request type since users and teams might have the same IDs
    let requests = await requestModel.find({SecondaryID: id, RequestType: requestType}).lean();
    return requests;
}

exports.readByRequestType = async function(requestType){
    let requests = await requestModel.find({RequestType: requestType}).lean();
    return requests;
}

exports.del = async function(id){
    let request = await requestModel.findByIdAndDelete(id);
    return request;
}

exports.deleteAll = async function(){
    await requestModel.deleteMany();
}

exports.update = async function(request)
{
    let id = { _id: request._id };
    let updates = { $set: {RequesterID: request.RequesterID, SecondaryID: request.SecondaryID, Reason: request.Reason, RequestType: request.RequestType, Status: request.Status}};
    await requestModel.updateOne(id, updates);
    return await exports.readById(request._id);
}