const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const inquirySchema=new Schema({

    propertyId:{
        type:Schema.Types.ObjectId,
        ref:"property"
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
    contact:{
        type:String
    },
    message:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        enum:["Open","Resolved","Closed"],
    }
},{
    timestamps:true
})

module.exports=mongoose.model("inquiry",inquirySchema);