const Tour = require('../models/tourModel')
//post data
exports.postTourService=async ({body})=>{
    const result = await Tour.create(body);
    return result;
}