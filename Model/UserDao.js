const { Db } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 UserName: String,
 UserType: String,
 },
 { collection : 'Users' });

 const userModel = mongoose.model('User', userSchema);

 exports.create = async function(user){
    const mongoUser = new userModel(user);
    await mongoUser.save();
    return await exports.read(mongoUser._id);
    //Used the read function because in tests it kept returning the _id in the beginning rather than end
 }
 
 exports.readAll = async function(){
    let users = await userModel.find({}).lean();
    return users;
 }
 
 exports.read = async function(id){
    let user = await userModel.findById(id).lean();
    return user;
}

exports.del = async function(id){
    let user = await userModel.findByIdAndDelete(id);
    return user;
}

exports.deleteAll = async function(){
    await userModel.deleteMany();
}

exports.update = async function(user)
{
    let id = { _id: user._id };
    let updates = { $set: {UserName: user.UserName, UserType: user.UserType}};
    await userModel.updateOne(id, updates);
}