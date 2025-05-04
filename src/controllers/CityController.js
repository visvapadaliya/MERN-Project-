const cityModel=require("../models/CityModel");

const addCity=async(req,res)=>{

    try{
            const saveCity=await cityModel.create(req.body);

            res.status(201).json({
                message:"City Added Succsefully....",
                data:saveCity
            });

    

    }
    catch(err){
        res.status(500).json({
            message:err.message,
        })
    }


}

const getAllCity =async(req,res)=>{

    try{
        const getAllCity=await cityModel.find().populate("stateId");
        res.status(201).json({
            message:"City Featched Succesfully",
            data:getAllCity,
        })

    }
    catch(err){
        res.status(500).json({
            message:err.message,
        })
    }
}

const getCityByState = async(req,res)=>{

    try{
        const cities=await cityModel.find({stateId:req.params.stateId});

        res.status(200).json({
            message:"city selected..",
            data:cities,
        })

    }
    catch(err){

            res.status(500).json({
                message:"City not Found..!"
            })
    }
}

module.exports={
    addCity,getAllCity,getCityByState
}