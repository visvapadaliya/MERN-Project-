const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const agentSchema=new Schema({

    agent_name:{
        type:String,
    },
    agency_name:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    license_no:{
        type:Number,
    },
    experience_years:{
        type:Number
    },
    rating:{
        type:Number
},
   
},{
    timestamps:true
})

module.exports=mongoose.model("agent",agentSchema)