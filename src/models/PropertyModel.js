const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const propertySchema=new Schema({

    property_name:{
        type:String,
        // required:true,
    },
    address:{
        type:String,

    },
    zipcode:{
        type:Number
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category"
    
    },
    areaId:{
        type:Schema.Types.ObjectId,
        ref:"area",
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:"city",

    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"state",
        // required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user",
        // required:true
    
    },
    description:{
        type:String,
    },
    basePrice:{
        type:Number,
        // required:true
    },
    rooms:{
        type:Number,
    },
    bathrooms:{
        type:Number
    },
    furnishingStatus:{
        type:String,
        enum:["Furnished","Semi-Furnished","UnFurnished"],
    },
    status:{
        type:String,
        enum:["Available","Sold","Rented"]
    },
    PropertyImage:{
        type:String,
    }

},{
    timestamps:true
})

module.exports=mongoose.model("property",propertySchema);