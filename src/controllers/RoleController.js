const roleModel=require("../models/RoleModel")

const getAllRoles=async(req,res)=>{

    const roles=await roleModel.find()
        res.json({
        message:" Role Feateched Succesfully",
        data:roles
    })
}

const addRole=async(req,res)=>{

    const saveRole=await roleModel.create(req.body);

    res.json({
        message:"Role Created..",
        data:saveRole,
    })
}

const deleteRole =async(req,res)=>{

    const deletedRole = await roleModel.findByIdAndDelete(req.params.id)

    res.json({
        message:"role Deleted Succesfully...",
        data:deleteRole
    })
};

const getRoleById = async (req,res)=>{

    //req.params.id
  
    const foundRole = await roleModel.findById(req.params.id)
    res.json({
      message:"role fatched..",
      data:foundRole
    })
  
  }

  module.exports={
    getAllRoles,addRole,deleteRole,getRoleById
  }