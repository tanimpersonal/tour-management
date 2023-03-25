const mongoose= require("mongoose")
const {Schema}= mongoose;
const tourSchema= new Schema({
    title: {
        type: String, 
        required: [true,"Provide title"]
    }, 
    tourDate:{
        type: String,
        required: [true, "Provide tour date"]
    },
    tourDetails : {
        type:String,
        required: [true, "Provide short description"]
    }, 
    tourApplyStartDate:{
        type:String, 
        required: [true, "Provide apply date"]
    },
    tourApplyLastDate:{
        type:String, 
        required:[true, "Provide last date"]
    },
    tourMember:{
        type:Number,
        required:[true, "Provide tour member"],
        min:[0,"Member can't be negative"],
        validator:{
            validate: value =>{
                const isInteger = Number.isInteger(value);
                if(isInteger){
                    return true
                }else{
                    return false
                }
            },
            message:"Must be an integer"
        }
    },
    tourPrice:
        {
            name:{
                type: String,
                required:[true,"Please enter package name"]
            },
            price:{
                type:Number,
                min:[0,"Can't be negative"],
                required:[true,"Please enter price"]
            }
        }
    
},{
    timestamps:true
})

//pre hook
tourSchema.pre('save',function(next){
    console.log("before saving"),
    next()
})

//post hook
tourSchema.post('save', function(doc,next){
    console.log("after saving")
    next()
})
//logger
tourSchema.methods.logger=async function (){
    await console.log(`Data saved for ${this.title} `)
}

const Tour = mongoose.model("Tour",tourSchema);
module.exports= Tour;
