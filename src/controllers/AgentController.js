const agentModel=require("../models/AgentModel");

const addAgent=async(req,res)=>{

    try{

        const saveAgent=await agentModel.create(req.body);
        res.status(201).json({

            message:"Agent Added Succesfully...!!!",
            data:saveAgent,
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })

    }

}

const getAllAgent=async(req,res)=>{

    try{
        const getAllAgent=await agentModel.find().populate("userId");
        res.status(200).json({
            message:"Agent Featched Susscefully...!",
            data:getAllAgent
        })

    }
    catch(err){
        res.status(400).json({
            message:err.message
        })

    }
}

const deleteAgent=async(req,res)=>{

    try{
            const deleteAgent=await agentModel.findByIdAndDelete(req.params.id);
            res.status(204).json({
                message:"Agent Deleted Succesfully..!"
            })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })

    }
}

module.exports={
    addAgent,getAllAgent,deleteAgent
}