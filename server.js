const colors = require('colors');
const app = require('./app'); 
const { dbConnect } = require('./utils/dbConnect');

const PORT = process.env.PORT || 8080; 

dbConnect();

app.app.listen(PORT,()=>{
    console.log("App running")
})