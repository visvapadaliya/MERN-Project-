const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const userSchema =new Schema({

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String
    },
    contact_No:{
        type:Number,
    },
    
    role:{
        type:Schema.Types.ObjectId,
        ref:"role"
    },
    Status:{
            type:String,
            default:true,
            // enum:["Active","Disable"]
    },
},
{
    timestamps:true,
})

module.exports=mongoose.model("user",userSchema)