require('dotenv').config(); // get the env variables
const mongoose = require('mongoose');

exports.connect = function(test){
  let uri = process.env.DB_URI; //production DB
  if(test === 1)
  {
    console.log('Confirmed testing.');
    uri = process.env.TESTDB_URI; //Test DB
  }
  mongoose.connect(uri,function(err){
    if(err) console.log(err); // Error callback
  });
}
exports.disconnect = async function(){
  await mongoose.connection.close(); 
}