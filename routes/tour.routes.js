const express = require("express"); 
const { getTours, postTours } = require("../controllers/tour.controllers");
const router = express.Router();
router.route('/').get(getTours);
router.route('/post').post(postTours)
module.exports=router;