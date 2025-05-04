const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const categorySchema=new Schema({

    name:{
        type:String,
        enum:["Residential","Commercial","Industrial"],
        // required:true
    },
    description:{
        type:String,
    },
    // active:{
    //     type:Boolean,
    //     default:true

    // }
})

module.exports=mongoose.model("category",categorySchema);