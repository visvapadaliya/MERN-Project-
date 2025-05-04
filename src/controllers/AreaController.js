const areaModel=require("../models/AreaModel");

const addArea=async(req,res)=>{

    try{

        const saveArea=(await areaModel.create(req.body));

        res.status(201).json({
            message:"Area Added Succesfully ...",
            data:saveArea
        })
    }
    catch(err){

        res.status(500).json({
            message:err.message
        })

    }
}

const getAllArea=async(req,res)=>{

    try{

        const getAllArea=await areaModel.find().populate("cityId").populate("stateId");

        res.status(201).json({
            message:"Area Featched Succes...",
            data:getAllArea
        })

    }
    catch(err){

        res.status(500).json({
            message:err.message,
        })
    }
}

const getAreaByCity=async(req,res)=>{

    try{

        const area=await areaModel.find({cityId:req.params.cityId});

        res.status(200).json({
            message:"City Found ..",
            data:area

        })

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })

    }
}

module.exports={
    addArea,getAllArea,getAreaByCity
}