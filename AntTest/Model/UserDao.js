const { Db } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 UserName: String,
 Email: String,
 Password: String,
 UserType: Number, //0-Player, 1-Coach, 2-Admin
 TeamID: String,
 Likes: [String],
 },
 { collection : 'Users' });

 const userModel = mongoose.model('User', userSchema);

 exports.create = async function(user){
    let duplicateName = await userModel.find({UserName: user.UserName}).lean();
    let duplicateEmail = await userModel.find({Email: user.Email}).lean();

    console.log(user.UserName)
    console.log( user.Email)
    if(duplicateName.length > 0)
    {
        console.log("User \"" + user.UserName + "\" already exists");
        //console.log(JSON.stringify(duplicateName));
        if(duplicateEmail.length > 0)
        {
            console.log("Email: \"" + user.Email + "\" is already being used");
            //console.log(JSON.stringify(duplicateEmail));
        }
        return null;
    }
    else if(duplicateEmail.length > 0)
    {
        console.log("Email: \"" + user.Email + "\" is already being used");
        //console.log(JSON.stringify(duplicateEmail));
        return null;
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

exports.readByTeamID = async function(TeamID){
    let users = await userModel.find({TeamID: TeamID}).lean();
    return users;
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
    let duplicateName = await userModel.find({UserName: user.UserName}).lean();
    let duplicateEmail = await userModel.find({Email: user.Email}).lean();
    if(duplicateName.length > 0 && ((duplicateName[0]._id.toString() !== user._id.toString()) || (duplicateName.length > 1)))
    {                                                               //Makes sure someone doesn't change their username to someone else's        
        console.log("Username \"" + user.UserName + "\" already exists while updating");      //Takes into account where user updates their account and doesn't change name
        //console.log(JSON.stringify(duplicateName));
        //if(potentialuser.length > 1)                              //Assumes duplicateName will have at most one user, since names should only be used once
        //{
            //console.log("Multiple users with the same username.  Contact the admin.");
        //}
        if(duplicateEmail.length > 0 && (duplicateEmail[0]._id.toString() != user._id.toString() || duplicateEmail.length > 1))
        {
            console.log("Email: \"" + user.Email + "\" is already being used while updating");
            //console.log(JSON.stringify(duplicateEmail));
        }
        return null;
    }
    else
    {
        let id = { _id: user._id };
        let updates = { $set: {UserName: user.UserName, Email: user.Email, Password: user.Password, UserType: user.UserType, TeamID: user.TeamID, Likes: user.Likes}};
        await userModel.updateOne(id, updates);
        return await exports.readById(user._id);
    }
}