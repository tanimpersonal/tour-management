require("dotenv").config();
const mongoose= require("mongoose");
const colors = require("colors");
dbConnect().catch(err=> console.log(err)); 
async function dbConnect(){
    await mongoose.connect(process.env.DATABASE_LOCAL)
    .then(console.log("Database Connection Successfull".red.bold))
}
exports.dbConnect= dbConnect;