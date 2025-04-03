const mongoose = require('mongoose')

const connectDatabase= async()=>{

  try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Mongoose connected...");
 } catch(err){
    console.log(`connectDatabase Error ${err.message}`);
    
 }

}

module.exports = connectDatabase;