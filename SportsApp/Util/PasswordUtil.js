//require('dotenv').config(); //use env constants
const bcrypt = require('bcrypt');
const salt = '$2b$04$UNgQbYi7ZDLHmLDKu1OBLu';

exports.hashPassword = function(pass){
    let hashedpass = bcrypt.hashSync(pass, salt); 
    return hashedpass;
}

exports.createSalt = function(){
    return bcrypt.genSaltSync(3);
}