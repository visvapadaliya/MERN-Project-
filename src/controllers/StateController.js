const stateModel= require("../models/StateModel");

const addState=async(req,res)=>{

    try{

        const saveState = await stateModel.create(req.body);

        res.status(201).json({
            message:"Satate Added Succesfully",
            data:saveState
        });
    }
    catch(err){
        res.status(500).json({
            message:err,

        });

    }

}

const getAllStates =async(req,res)=>{

    try{

        const getAllStates=await stateModel.find();

        res.status(201).json({
            message:"All State Featched Succesfully...",
            data:getAllStates
        })
    }
    catch(err){
        res.status(500).json({
            message:err,

        })
    }

}

module.exports={

    addState,getAllStates
}