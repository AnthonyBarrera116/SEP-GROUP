const { Db } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 UserName: String,
 Password: String,
 UserType: Number, //0-Player, 1-Coach, 2-Admin
 TeamID: String,
 Likes: [String],
 },
 { collection : 'Users' });

 const userModel = mongoose.model('User', userSchema);

 exports.create = async function(user){
    let potentialuser = await userModel.find({UserName: user.UserName}).lean();
    //console.log("Potential User is: ");
    //console.log(potentialuser);
    if(potentialuser.length > 0)
    {
        console.log("User already exists");
        console.log(JSON.stringify(potentialuser));
    }
    else
    {
        const mongoUser = new userModel(user);
        await mongoUser.save();
        return await exports.readById(mongoUser._id);
    }
    //Used the read function because in tests it kept returning the _id in the beginning rather than end
 }
 
 exports.readAll = async function(){
    let users = await userModel.find({}).lean();
    return users;
 }
 
 exports.readById = async function(id){
    let user = await userModel.findById(id).lean();
    return user;
}

exports.readByUsername = async function(name){//Assumes there will only be one user with the given name
    let user = await userModel.findOne({UserName: name}).lean();
    //console.log("Read by username: ")
    //console.log(JSON.stringify(user));
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
    let potentialuser = await userModel.find({UserName: user.UserName}).lean();
    if(potentialuser.length > 0 && (potentialuser[0]._id != user._id || potentialuser.length > 1))
    {                                                               //Makes sure someone doesn't change their username to someone else's        
        console.log("Username already exists while updating");      //Takes into account where user updates their account and doesn't change name
        //if(potentialuser.length > 1)                              //Assumes potentialuser will have at most one user, since names should only be used once
        //{
            //console.log("Multiple users with the same username.  Contact the admin.");
        //}
    }
    else
    {
        let id = { _id: user._id };
        let updates = { $set: {UserName: user.UserName, Password: user.Password, UserType: user.UserType, TeamID: user.TeamID, Likes: user.Likes}};
        await userModel.updateOne(id, updates);
    
        //console.log("Potential User is: ");
        //console.log(potentialuser);
    }
}