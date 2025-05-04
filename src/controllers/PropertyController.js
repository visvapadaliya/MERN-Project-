const propertyModel=require("../models/PropertyModel");
const multer=require("multer");
const path=require("path");
const cloudinaryUtil = require("../utils/CloudanryUtil");
const PropertyModel = require("../models/PropertyModel");

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
    
  }).single("image");

 
const addProperty=async(req,res)=>{

    try{
        const saveProperty=await propertyModel.create(req.body);

        res.status(201).json({
            message:"Property Added Succesfully ...!",
            data:saveProperty
        })

    }
    catch(err){

        res.status(500).json({
            message:err.message,
        })

    }
}

const addPropertyWithFile = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        res.status(500).json({
          message: err.message,
        });
      } else {
       
  
        const cloundinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
        console.log(cloundinaryResponse);
        console.log(req.body);
   

        req.body.PropertyImage = cloundinaryResponse.secure_url;
        const savedProperty = await propertyModel.create(req.body);
  
        res.status(200).json({
          message: "Property saved successfully",
          data: savedProperty
        });
      }
    });
  };
  




const getAllProperty =async(req,res)=>{

    try{

        const getAllProperty=await propertyModel.find().populate("categoryId").populate("areaId").populate("cityId").populate("stateId").populate("userId");

        res.status(200).json({
            message:"Property Featched Succesfully ...!",
            data:getAllProperty
        })
    
    }

    catch(err){

        res.status.json(500)({
            message:err.message
        })
    }
}

const deleteProperty=async(req,res)=>{

    try{

        const deleteProperty=await propertyModel.findByIdAndDelete(req.params.id);
        res.status(204).json({
            message:"Property Deleted Sussefully ...!",
        })
     }
    catch(err){

            res.status(400).json({
                message:err.message,

            })
    }
}

const getPropertyById=async(req,res)=>{
  try{
     const property=await PropertyModel.findById(req.params.id);
     if(!property)
     {
      res.status(404).json({
        message:"No Property Found"
      })
     }
     else{
      res.status(200).json({
        message:"Property Found Succesfully !",
        data:property,
      })
     }

  }
  catch(err){
    res.status(500).json({
      message:err.message,
    })

  }
}

const updateProperty=async(req,res)=>{

  try{
     const updateProperty=await propertyModel.findByIdAndUpdate(
      req.params.id,req.body,{new:true});

      res.status(200).json({
        message:"Property Updated Succesfully..!",
        data:updateProperty,
      })
    }
  catch(err){
    res.status(500).json({
      message:err.message,
      data:err,
    })

  }
}

const getAllPropertyByUserId = async (req, res) => {
  try {
    const propertys = await propertyModel.find({ userId: req.params.userId }).populate("stateId cityId areaId userId");
    if (propertys.length === 0) {
      res.status(404).json({ message: "No Propertys found" });
    } else {
      res.status(200).json({
        message: "Property found successfully",
        data: propertys,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
const getPropertyByCategoryId = async (req, res) => {
  try {
    console.log("Category ID:", req.params.categoryId); 

    const property = await propertyModel
      .find({ categoryId: req.params.categoryId })
      .populate("stateId cityId areaId");

    if (property.length === 0) {  
      return res.status(404).json({
         message: "No Property Found" 
        });
    }

    res.status(200).json({
      message: "Property Found Successfully!",
      data: property,
    });

  } catch (err) {
    console.error("Error:", err); 
    res.status(500).json({ message: err.message });
  }
};


const getPropertyByFilters = async (req, res) => {
  try {
      console.log("Received Query Parameters:", req.query); 

      const { stateId, cityId, areaId, categoryId } = req.query;

      let filter = {};
      if (stateId) filter.stateId = stateId;
      if (cityId) filter.cityId = cityId;
      if (areaId) filter.areaId = areaId;
      if (categoryId) filter.categoryId = categoryId;

      console.log("Filter Object:", filter); 

      const properties = await propertyModel.find(filter).populate("stateId cityId areaId categoryId userId");

      if (properties.length === 0) {
          return res.status(404).json({ message: "No Properties Found" });
      }

      res.status(200).json({
          message: "Properties Retrieved Successfully",
          data: properties,
      });
  } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: err.message });
  }
};

module.exports={
    addProperty,getAllProperty,deleteProperty,addPropertyWithFile,getPropertyById,updateProperty,getAllPropertyByUserId,getPropertyByCategoryId,getPropertyByFilters
}
