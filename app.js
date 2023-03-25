const express = require("express");
const app = express();
const cors = require("cors");
const tourRoutes = require("./routes/tour.routes.js")

//middlewares 
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/tours',tourRoutes)

//global route
app.get('/',(req,res,next)=>{
    res.send("Hello Tour Management System")
})

exports.app= app; 
