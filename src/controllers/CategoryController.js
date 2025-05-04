const { model } = require("mongoose");
const categoryModel=require("../models/CategoryModel");

const addCategory =async(req,res)=>{

    try{
        const saveCategory=await categoryModel.create(req.body);

        res.status(201).json({
            message:"Category Added Succesfully...",
            data:saveCategory
        })
    }
    catch(err){

        res.status(500).json({
            message:err.message
        })
    }
}

const getAllCategory =async(req,res)=>{

    try{
        const getAllCategory=await categoryModel.find();

        res.status(200).json({
            message:"Category Featched Succes...!!",
            data:getAllCategory
        })
    }
    catch(err){

        res.status(500).json({
            message:err.message
        })

    }

}

module.exports={
    addCategory,getAllCategory
}