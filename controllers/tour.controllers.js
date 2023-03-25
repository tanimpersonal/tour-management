const { postTourService } = require("../services/tour.services")

exports.getTours=(req,res,next)=>{
    console.log("I'm get")
}

exports.postTours= async (req,res,next)=>{
    try {
        const postedData= await postTourService(req);
        res.status(200).json({
            status:"success",
            message:'posted successfully',
            data: postedData
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed', 
            error: error.message,
            message:'please enter valid data'
        })
    }
}