const userModel=require("../models/UserModel")
const mailUtils = require("../utils/MailUtil")

const brcypt=require("bcrypt")

const loginUser=async(req,res)=>{
    
    const email=req.body.email;
    const password=req.body.password;

    const foundUserFromEmail =await userModel.findOne({email:email}).populate("role");
    console.log(foundUserFromEmail);

    if(foundUserFromEmail!=null)
    {
        const isMatch=brcypt.compareSync(password,foundUserFromEmail.password);

        if(isMatch==true)
        {
            res.status(200).json({
                message:"Login succesfully...",
                data:foundUserFromEmail,
            });
        }
        else{
            res.status(404).json({
                message:"Invalid Password",
                
            });
        }
    }
    else
    {
        res.status(404).json({
            message:"Email Not Found..."
        });
    }

};

const signup=async(req,res)=>{

    try{
 
       

        const salt=brcypt.genSaltSync(10);
        const hashedPassword=brcypt.hashSync(req.body.password,salt);
        req.body.password=hashedPassword;
         
     const createdUser= await userModel.create(req.body);
     await mailUtils.sendingMail(createdUser.email,"Welcome to real estate finder","this is test mail")
 
     res.status(201).json({
         message:"User Created ...",
         data:createdUser,
     });
    }
    catch(err){
     console.log(err)
     res.status(500).json({
         message:"Error",
         data:err,
     })
    }
 }

 const getAllUsers=async(req,res)=>{

    const user=await userModel.find().populate("role");

    res.json({
        message:"User Feactched Succesfully....",
        data:user,
        
    })

}

const deleteUser=async(req,res)=>{

    const deleteUser=await userModel.findByIdAndDelete(req.params.id);

    res.json({
        message:"User Deleted Succesfully",
        data:deleteUser

    })
    
}
const getUserById=async(req,res)=>{
  try{
     const user=await userModel.findById(req.params.id).populate("role");
     if(!user)
     {
      res.status(404).json({
        message:"No User Found"
      })
     }
     else{
      res.status(200).json({
        message:"user Found Succesfully !",
        data:user,
      })
     }

  }
  catch(err){
    res.status(500).json({
      message:err.message,
    })

  }
}

module.exports={
    loginUser,signup,getAllUsers,deleteUser,getUserById
}